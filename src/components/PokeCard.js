// Components
import PokeImage from './PokeImage'
import PokeInfo from './PokeInfo'

// Styles
import '../assets/css/PokeCard.css'

// API
import {getPokemon} from '../api/index'

export default function PokeCard({pokemon}) {

    const getDetails = async () => {
        try {
            const response = await getPokemon(pokemon.url)
            console.log(response)
            alert('Full descripcion')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div 
            className='card'
            onClick={getDetails}
        >
            <PokeImage img={pokemon.name}/>
            <PokeInfo info={pokemon.name}/>
        </div>
    )
}
