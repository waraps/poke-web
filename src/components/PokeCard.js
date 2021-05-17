// Components
import PokeImage from './PokeImage'
import PokeInfo from './PokeInfo'

// Styles
import '../assets/css/PokeCard.css'

export default function PokeCard({pokemon}) {
    
    return (
        <div 
            className='card'
            onClick={() => alert('Full descripcion')}
        >
            <PokeImage img={pokemon.name}/>
            <PokeInfo info={pokemon.name}/>
        </div>
    )
}
