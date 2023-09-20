const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.bnt-next');


let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch 
    (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = ''; 
    const data = await fetchPokemon (pokemon);
}

if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions'] ['generation-v']
    ['black-white']['animated']['front-default'];
    input.value = ''; 
    searchPokemon = data.id
}else{
    pokemonImage.style.display = 'nome';
    pokemonName.innerHTML = 'Not Found :c'
    pokemonNumber.innerHTML='';
}