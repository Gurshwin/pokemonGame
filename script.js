const pokeContainer = document.getElementById("poke-container");
const totalPokemon = 20;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  normal: '#F5F5F5'
};

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

function createPokemonCard(pokemon) {
  const pokeEl = document.createElement('div');
  pokeEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const type = pokemon.types[0].type.name;
  const color = colors[type];

  pokeEl.style.backgroundColor = color;

  pokeEl.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${name}">
    <h3>${name}</h3>
    <small>#${id}</small><br>
    <small>Type: ${type}</small>
  `;

  pokeContainer.appendChild(pokeEl);
}

async function fetchPokemons() {
  for (let i = 1; i <= totalPokemon; i++) {
    await getPokemon(i);
  }
}

fetchPokemons();

