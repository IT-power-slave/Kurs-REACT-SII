import React, { useReducer, useState, useEffect } from "react";
import Hooks from "../hooks";

const initialState = {
  clickSubmit: false,
  kontaktImie: "Jan",
  kontaktNazwisko: "Kowalsky",
  kontaktEmail: "dupa@blada.pl"
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_IMIE: "CHANGE_IMIE",
  CHANGE_NAZWISKO: "CHANGE_NAZWISKO",
  CHANGE_EMAIL: "CHANGE_EMAIL"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: !state.clickSubmit
      };
    case actrions.CHANGE_IMIE:
      return {
        ...state,
        kontaktImie: action.payload
      };

    case actrions.CHANGE_NAZWISKO:
      return {
        ...state,
        kontaktNazwisko: ""
      };

    case actrions.CHANGE_EMAIL:
      return {
        ...state,
        kontaktEmail: ""
      };

    default:
      throw new Error("reducer error!");
  }
};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("sfsdfsdf");

  const onClickSubmit = event => {
    event.preventDefault();
    consloe.log("onClickSubmit");
    dispatch({ type: action.CLICK_SUBMIT, payload: event });
  };
  const onChangeImie = event => {
    const imie = event.currentTarget.value;
    event.preventDefault();
    consloe.log("onChangeImie");
    dispatch({ type: action.CHANGE_IMIE, payload: event });
  };
  const onChangeNazwisko = event => {
    event.preventDefault();
    consloe.log("onChangeNazwisko");
    dispatch({ type: action.CHANGE_NAZWISKO, payload: event });
  };
  const onChangeEmail = event => {
    event.preventDefault();
    consloe.log("onChangeEmail");
    dispatch({ type: action.CHANGE_EMAIL, payload: event });
  };

  return {
    ...state,
    onClickSubmit,
    onChangeImie,
    onChangeNazwisko,
    onChangeEmail
  };
};

export default useFormularzKontaktowy;
