import { fetchPokemonList, fetchPokemonDetails, fetchPokemonByName } from './api.js';
import { showLoadingMessage, hideLoadingMessage, displayPokemonCard, showPokemonDetails } from './ui.js';

let limit = 21;
let offset = 0;
let pokemonList = [];
let searchQuery = '';

function loadPokemonList() {
    showLoadingMessage();
    fetchPokemonList(limit, offset).done(function (data) {
        $('#pokemonContainer').empty();
        pokemonList = data.results;
        data.results.forEach((pokemon, index) => {
            fetchPokemonDetails(pokemon.name).done(function (pokeData) { 
                displayPokemonCard(pokeData, pokemon.name, index);
            });
        });
        hideLoadingMessage();
    });
}

function searchPokemon(query) {
    searchQuery = query.trim().toLowerCase();
    if (searchQuery) {
        showLoadingMessage();
        fetchPokemonByName(searchQuery).done(function (pokemon) {
            $('#pokemonContainer').empty();
            showPokemonDetails(pokemon); 
            hideLoadingMessage();
        }).fail(function () {
            hideLoadingMessage();
            $('#pokemonContainer').html('<div class="error-message">Pokémon no encontrado. Intenta nuevamente.</div>');
        });
    }
}

function nextPage() {
    offset += limit;
    loadPokemonList();
}

function prevPage() {
    if (offset > 0) {
        offset -= limit;
        loadPokemonList();
    }
}

export { loadPokemonList, searchPokemon, nextPage, prevPage };

