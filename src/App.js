import React from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";

import "./style.css";

const Header = () => {
  return <header>Naglowek</header>;
};

const Nav = () => {
  return (
    <nav>
      <a href="/">Strona Glowna</a>
      <div />
      <a href="/kontakt">Kontakt</a>
    </nav>
  );
};

const Main = props => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult}</main>;
};

const Aside = ({ title, name }) => {
  return <aside>marketing</aside>;
};

const Footer = () => {
  return <footer> Stopka</footer>;
};

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main title="Helloł" name="Grzesiek" />
      <Aside />
      <Footer />
    </>
  );
}