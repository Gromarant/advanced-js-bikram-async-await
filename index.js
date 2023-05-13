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

/* Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.*/
const getRandomPokemonImage = async () => {
  try {
    let idNum = Math.floor(Math.random()*135)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}/`);
    let data = await response.json();
    return data.sprites.front_default;
  }
  catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}

/* Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea) */
const printPugVsPikachu = async () => {
  try {
    let resPug = await fetch(`https://dog.ceo/api/breed/pug/images/random`);
    let pugData = await resPug.json();
    document.querySelector('.exercise6').innerHTML += `<img class="pugImg" src="${pugData.message}" alt="Pug">`;
    
    let resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    let pokemonData = await resPokemon.json();
    document.querySelector('.exercise6').innerHTML += `<img class="pikachuImg" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">`;
  }
  catch {
    console.log(`ERROR: ${error.stack}`);
  }
}
printPugVsPikachu();

/* Ejercicios con Rick and Morty
Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:

Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.*/
const getRandomCharacter = async () => {
  try {
    let idNumber = Math.floor(Math.random()*20);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${idNumber}`);
    let data = await response.json();
    return data;
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

/* Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode}) */
const getRandomCharacterInfo = async () => {
  try {
    let idNumber = Math.floor(Math.random()*20);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${idNumber}`);
    let data = await response.json();
    let {name, image:img, episode:episodes} = data;
    
    let episodeOne = await fetch(`${episodes[0]}`);
    let episodeData = await episodeOne.json();
    let {name:firstEpisode, air_date:dateEpisode} = episodeData;
    return {img, name, episodes, firstEpisode, dateEpisode}
  }
  catch {
    console.log(`ERROR: ${error.stack}`);
  }
}