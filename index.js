//nada
const intro = require("./intro");
const fs = require ('fs');      //file system module
const nudo = require("./nudo");
const final = require("./final");
const cowsay = require("cowsay");

//estas son las diferentes variables en Javascrip jejejeje
const nombre = "Baxter";
const lugar = "Little Caesars ";
const edad = 5;
const hobby = "jugar";
const problema = "no podía comer carne";
const emocion = "se ponia triste y deprimido";
const solucion = "pizzas veganas ";
const introHistoria = intro.historia(nombre, lugar);
const finalHistoria = nudo.historia(lugar, solucion)

// muchasPalabras  camel case
// muchas-palabras dash case
// muchas_palabras snake case
const historiaCompleta = introHistoria + finalHistoria;


console.log(historiaCompleta);


console.log(cowsay.say({
  text : "I´m a mooooodule",
  e : "oO",
  T : "U "
}));
