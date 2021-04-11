import React, { useState } from "react";
import Hooks from "../hooks";
import "./FormularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy();
  /*
  const [kontaktImie, setKontaktImie] = useState("Jan");
  const [kontaktNazwisko, setKontaktNazwisko] = useState("Kowalski");
  const [kontaktEmail, setKontaktEmail] = useState();
*/

  console.log(formularzKontaktowy.clickSubmit);

  return !formularzKontaktowy.clickSubmit ? (
    <form
      id="formularzKontaktowy"
      className="formularzKontaktowy"
      onSubmit={formularzKontaktowy.onClickSubmit}
    >
      <h1>Formularz Kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label type="text">Podaj imię:</label>
        <input
          id="imie"
          type="text"
          name="Imie"
          required
          minLength="4"
          maxLength="20"
          value={formularzKontaktowy.kontaktImie}
          onChange={formularzKontaktowy.onChangeImie}
        />
        <input
          id="nazwisko"
          type="text"
          name="Nazwisko"
          required
          minLength="4"
          maxLength="20"
          value={formularzKontaktowy.kontaktNazwisko}
          onChange={formularzKontaktowy.onChangeNazwisko}
        />
        <input
          id="imie"
          type="text"
          name="Imie"
          required
          minLength="4"
          maxLength="20"
          value={formularzKontaktowy.kontaktEmail}
          onChange={formularzKontaktowy.onChangeEmail}
        />

        <legend>Zgody marketingowe</legend>
        <legend>Zgody RODO</legend>
        <button type="submit">Wyślij </button>
        <button type="reset">Wyczyść</button>
      </fieldset>
    </form>
  ) : (
    <selection>
      {" "}
      <h2> Dzięki za wysłanie. </h2>{" "}
    </selection>
  );
};

export default FormularzKontaktowy;
