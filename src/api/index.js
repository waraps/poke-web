const getPokemons = async (offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    const pokemons = await response.json()
    return pokemons
}

export default getPokemons