const getPokemons = async (offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    const pokemons = await response.json()
    return pokemons
}

const getPokemon = async (url) => {
    const response = await fetch(`${url}`)
    const pokemon = await response.json()
    return pokemon
}

export {getPokemons, getPokemon}