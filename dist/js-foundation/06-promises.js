import { buildHttpClient } from '../plugins/index.js';
const http = buildHttpClient({});
export const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
    //throw new Error(`Pokemon no existe`);
    //return fetch(url)
    //      .then((response) => response.json())
    //.then( () => {throw new Error(`Pokemoon no existe`)})
    //    .then((pokemon) => pokemon.name);
};
