const listaPokemons = require("./listaPokemons");

function obtenerEvolucionesPokemons(listaPokemons){
  return listaPokemons.map(pokemon => {
    return devolverNombresPokemons(pokemon.chain);
  });
}

function devolverNombresPokemons(pokemon){
  let nombresPokemons ="";
  if(pokemon.evolves_to.length>0){
    nombresPokemons = '-'+devolverNombresPokemons(pokemon.evolves_to[0]);
  }
  nombresPokemons = capitalize(pokemon.species.name) + nombresPokemons;
  return nombresPokemons;
}

function capitalize(palabra){
  const capitalLetter = 0;
  const segundaPosicion = 1;
  return palabra.charAt(capitalLetter).toUpperCase()+palabra.substring(segundaPosicion);
}
console.log(obtenerEvolucionesPokemons(listaPokemons));