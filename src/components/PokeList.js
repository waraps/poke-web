// Components
import PokeCard from './PokeCard'

// Styles
import '../assets/css/PokeList.css'

export default function PokeList({pokemons}) {
    return  pokemons.length > 0 ? 
                        <div className="grid">
                            {
                                pokemons.map(pokemon => {
                                    return <PokeCard 
                                                key={pokemon.name} 
                                                pokemon={pokemon}    
                                            />
                                })
                            }
                        </div>
                    :
                        <h2>No hay resultados para mostrar</h2>
}
