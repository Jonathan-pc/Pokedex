const apiBase = 'https://pokeapi.co/api/v2/pokemon';

function fetchPokemonList(limit, offset) {
    return $.get(`${apiBase}?limit=${limit}&offset=${offset}`);
}

function fetchPokemonDetails(pokemonId) {
    return $.get(`${apiBase}/${pokemonId}`);
}

function fetchPokemonByName(name) {
    return $.get(`${apiBase}/${name}`);
}

export { fetchPokemonList, fetchPokemonDetails, fetchPokemonByName };
