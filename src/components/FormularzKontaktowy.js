import React, { useState } from "react";
import "./formularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const [kontaktImie, setKontaktImie] = useState("Jan");
  const [kontaktNazwisko, setKontaktNazwisko] = useState("Kowalski");
  const [kontaktEmail, setKontaktEmail] = useState();

  return (
    <form id="formularzKontaktowy">
      <h1>Formularz Kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label for="imie" type="text">
          {" "}
          Podaj imie:
        </label>
        <input
          type="text"
          name="Imie"
          value={kontaktImie}
          onChange={e => setKontaktImie(e.target.value)}
        />
        <label for="nazwisko" type="text">
          {" "}
          Podaj nazwisko:
        </label>
        <input
          type="text"
          name="Nazwisko"
          value={kontaktNazwisko}
          onChange={e => setKontaktNazwisko(e.target.value)}
        />
        <label for="email" type="text">
          {" "}
          Podaj email:
        </label>
        <input
          type="text"
          name="email"
          value={kontaktEmail}
          onChange={e => setKontaktEmail(e.target.value)}
        />

      </fieldset>
      <fieldset>
        <legend>Zgody marketingowe</legend>
      </fieldset>
      <fieldset>
        <legend>Zgody RODO</legend>
      </fieldset>
      <fieldset>
        <button type="submit" value="Wyślij" />
        <button type="reset">Wyczyść</button>
        <button type="button">Inna Akcja</button>
        <input type="submit" value="Wyślij" />
      </fieldset>
    </form>
  );
};

export default FormularzKontaktowy;
