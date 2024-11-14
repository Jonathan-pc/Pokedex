import { loadPokemonList } from './navigation.js';

function showLoadingMessage() {
    $('#pokemonContainer').html('<div class="loading">Cargando...</div>');
}

function hideLoadingMessage() {
    $('.loading').remove();
}

function displayPokemonCard(pokemon, name, index) {
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    const card = $(`
        <div class="card pokemon-card">
            <img src="${imageUrl}" class="card-img-top" alt="${name}">
            <div class="card-body text-center">
                <h5 class="card-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h5>
            </div>
        </div>
    `).hide();

    $('#pokemonContainer').append(card);
    card.fadeIn(300);

    card.on('click', function () {
        showPokemonDetails(pokemon);
    });
}

function showPokemonDetails(pokemon) {
    const types = pokemon.types.map(type => type.type.name).join(', ');
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    const details = `
        <div class="card pokemon-detail-card">
            <img src="${imageUrl}" class="card-img-top mx-auto d-block" alt="${pokemon.name}">
            <div class="card-body text-center">
                <h2 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Tipos:</strong> ${types}</p>
            </div>
            <button class="btn btn-custom" id="backButton">Volver</button>
        </div>
    `;
    $('#pokemonContainer').html(details);

    $('#backButton').on('click', function () {
        loadPokemonList();
    });
}

export { showLoadingMessage, hideLoadingMessage, displayPokemonCard, showPokemonDetails };
