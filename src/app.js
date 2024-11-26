/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const listaDeValores1 = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K"
];
const listaDeTipos1 = ["⚔️", "☘️", "❤️", "♦️"];

const listaDeValores2 = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K"
];
const listaDeTipos2 = ["⚔️", "☘️", "❤️", "♦️"];

const getValorAleatorio = () => {
  let random = Math.random();
  let item = Math.floor(random * listaDeValores1.length);
  return listaDeValores1[item];
};

const getTipoAleatorio = () => {
  let random2 = Math.random();
  let item2 = Math.floor(random2 * listaDeTipos1.length);
  return listaDeTipos1[item2];
};

const setValorAleatorio = valor => {
  document.querySelector("#valor1").innerHTML = valor;
};

const setTipoAleatorio = tipo => {
  document.querySelector("#tipo1").innerHTML = tipo;
  document.querySelector("#segundo-Tipo").innerHTML = tipo;
};

const getValorAleatorio2 = () => {
  let rdm = Math.random();
  let itm = Math.floor(rdm * listaDeValores2.length);
  return listaDeValores2[itm];
};

const getTipoAleatorio2 = () => {
  let rdm2 = Math.random();
  let itm2 = Math.floor(rdm2 * listaDeTipos2.length);
  return listaDeTipos1[itm2];
};

const setValorAleatorio2 = valor => {
  document.querySelector("#valor2").innerHTML = valor;
};

const setTipoAleatorio2 = tipo => {
  document.querySelector("#tipo2").innerHTML = tipo;
  document.querySelector("#segundo-Tipo2").innerHTML = tipo;
};

const generaUnaCartaAleatoria = () => {
  const valor = getValorAleatorio();
  const tipo = getTipoAleatorio();
  const value = getValorAleatorio2();
  const type = getTipoAleatorio2();
  setValorAleatorio(valor);
  setTipoAleatorio(tipo);
  setValorAleatorio2(value);
  setTipoAleatorio2(type);
};

window.generaUnaCartaAleatoria = generaUnaCartaAleatoria;
