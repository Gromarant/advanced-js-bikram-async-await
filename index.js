/* Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo async/await:
Antes de empezar, lee la documentación de la API para comprender como funcionan los endpoints

Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio */
const getRandomPokemon = async () => {
  try {
    let idNum = Math.floor(Math.random()*135)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}/`);
    let data = await response.json()
    return data;
  }
  catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}

/* Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name}) */ 
const getImageAndName = async () => {
  try {
    let idNum = Math.floor(Math.random()*135)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}/`);
    let data = await response.json()
    let img = data.sprites.front_default;
    let name = data.name;
    const obj = {img, name}
    return obj;
  }
  catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}