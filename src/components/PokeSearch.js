// Styles
import '../assets/css/PokeSearch.css'

// Images
import Logo from '../assets/img/logo.svg'

export default function PokeSearch({name, setName}) {
    return (
        <div className='search-bar'>
            <img alt="logo" src={Logo} width='240' />
            <input
                className='input-search' 
                placeholder='Buscar por nombre ..' 
                value={name} 
                onChange={e => setName(e.target.value)}/>
        </div>
    )
}
