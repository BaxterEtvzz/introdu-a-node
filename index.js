//modulos
const intro = require("./intro");
const fs = require ('fs');      //file system module
const nudo = require("./nudo");
const final = require("./final");
const cowsay = require("cowsay");

//estas son las diferentes variables en Javascrip jejejeje
const nombre = "Baxter";
const lugar = "Little Caesars ";
const edad = 9;
const hobby = "jugar";
const problema = "no podía comer carne";
const cafe =  'café americano';
const emocion = "se ponia triste y deprimido";
const solucion = "pizzas veganas ";
const introHistoria = intro.historia(nombre, lugar);


//funcion de file system
fs.readFile('baxter.txt', 'utf-8', function(err, contenido){
  if(err){
    throw err;
  }

    const personajes = contenido.split(',');
    const numeroPersonaje = Math.floor (Math.random() * personajes.length);
    const personajeRandom = personajes[numeroPersonaje];

    const historiaCompleta = juntarHistoria(personajeRandom);

    console.log(personajes);
    console.log(numeroPersonaje);
    console.log(personajeRandom);

    //Escribir Historia
    console.log(historiaCompleta);

    fs.writeFile('Historia.txt', historiaCompleta, function(err){
      if(err){
        throw err;
      }
    }

  );


});

// Partes de historia
function juntarHistoria(personaje){
    const introHistoria = intro.historia(personaje,lugar);
    const nudoHistoria = nudo.historia2(hobby, edad, nombre);
    const historiaCompleta = introHistoria + nudoHistoria;
    return historiaCompleta;

}

// muchasPalabras  camel case
// muchas-palabras dash case
// muchas_palabras snake case



console.log(cowsay.say({
  text : "I´m a mooooodule",
  e : "oO",
  T : "U "
}));
