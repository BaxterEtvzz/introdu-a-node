//nada
const intro = require("./intro");
const nudo = require("./nudo");
const final = require("./final");
const cowsay = require("cowsay");

//estas son las diferentes variables en Javascrip
const nombre = "Baxter";
const lugar = "Little Caesars ";
const edad = Math.floor(Math.random() * 100);
const hobby = "jugar";
const problema = "no podía comer carne";
const emocion = "se ponia triste y deprimido";
const solucion = "pizzas veganas ";



console.log(intro.historia(nombre, lugar, edad));
console.log(nudo.historia2(nombre, lugar, edad));


console.log(cowsay.say({
  text : "I´m a mooooodule",
  e : "oO",
  T : "U "
}));
