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

/* Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma */
const printImageAndName = () => {
  let obj = getImageAndName();
  return `<section>
            <img src="${obj.img}" alt="${obj.name}">
            <h1>${obj.name}</h1>
          </section>`
}

/* Ejercicios Batalla entre Pokemon y perritos 
Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'
Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio*/
const getRandomDogImage = async () => {
  try {
    let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    let data = await response.json()
    return data.message;
  }
  catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}