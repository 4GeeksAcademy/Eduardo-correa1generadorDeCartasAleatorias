/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  function paloAleatorio() {
    const obtenerPalo = Math.floor(Math.random() * palos.length);
    return palos[obtenerPalo];
  }

  const palo = paloAleatorio();

  const elementosPalo = document.getElementsByClassName("palo");

  for (let i = 0; i < elementosPalo.length; i++) {
    elementosPalo[i].textContent = palo;
    if (palo === "♥" || palo === "♦") {
      elementosPalo[i].classList.add("rojo");
    }
  }

  function valorAleatorio() {
    const obtenerValor = Math.floor(Math.random() * valores.length);
    return valores[obtenerValor];
  }
  const numero = valorAleatorio();
  const elementosNumero = document.getElementsByClassName("numero");
  for (let i = 0; i < elementosNumero.length; i++) {
    elementosNumero[i].textContent = numero;
  }
};
