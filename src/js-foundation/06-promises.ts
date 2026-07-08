import { buildHttpClient } from '../plugins/index.js';
const http = buildHttpClient({});

export const getPokemonById = async (id: string|number): Promise<string> => {
const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const pokemon = await http.get(url);

//throw new Error(`Pokemon no existe`);
return pokemon.name;
    
//return fetch(url)
  //      .then((response) => response.json())
        //.then( () => {throw new Error(`Pokemoon no existe`)})
    //    .then((pokemon) => pokemon.name);

};
