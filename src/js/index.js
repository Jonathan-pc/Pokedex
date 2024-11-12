import { loadPokemonList, searchPokemon, nextPage, prevPage } from './pokemonManager.js';
import { toggleTheme, initializeTheme } from './theme.js';

$(document).ready(function () {
    initializeTheme();

    $('#toggleTheme').on('click', toggleTheme);

    loadPokemonList(); 

    $('#nextPage').on('click', nextPage);
    $('#prevPage').on('click', prevPage);

    $('#searchButton').on('click', function () {
        const searchQuery = $('#pokemonSearch').val();
        searchPokemon(searchQuery);
    });

    $('#showAllButton').on('click', function () {
        $('#pokemonSearch').val('');
        loadPokemonList();
    });
});
