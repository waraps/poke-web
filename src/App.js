import React, {useState, useEffect} from 'react'
import './App.css';

// API
import {getPokemons} from './api/index'

// Components
import PokeSearch from './components/PokeSearch'
import PokeList from './components/PokeList'

function App() {
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [listPokemons, setListPokemons] = useState([])
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
      lisntingPokemon()
  }, [offset])

  useEffect(() => {
    findPokemon()
  }, [name])
  
  const lisntingPokemon = async () => {
      try {
          setIsLoading(true)
          const list = await getPokemons(offset)
          const { results } = list
          setPokemons([...pokemons, ...results])
          setListPokemons([...pokemons, ...results])
      } catch (error) {
          console.log(error)
      }
      setIsLoading(false)
  }

  const findPokemon = async () => {
    if(name === '') {
      setListPokemons(pokemons)
    } else {
        let result = pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(name.toLowerCase()) > - 1);
        setListPokemons(result)
    }
  }

  const loadMore = () => {
    setOffset(prev => prev + 20)
  }

  return (
    <div>
      <PokeSearch pokeName={name} setName={setName}/>
      <PokeList pokemons={listPokemons}/>
      <div className='load-more'>
        {
          isLoading ? <a className='load-more-btn' onClick={loadMore}>Cargando ..</a>
                    : <a className='load-more-btn' onClick={loadMore}>Cargar mas</a>
        }
      </div>
    </div>
  )
}

export default App;
