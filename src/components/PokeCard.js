import React, {useState} from 'react'
import {
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';

// Components
import PokeImage from './PokeImage'
import PokeInfo from './PokeInfo'
import PokeDetails from './PokeDetails'

// Styles
import '../assets/css/PokeCard.css'
import 'react-simple-hook-modal/dist/styles.css';

// API
import {getPokemon} from '../api/index'

export default function PokeCard({pokemon}) {
    const [details, setDetails] = useState(null)
    const { isModalOpen, openModal, closeModal } = useModal();

    const getDetails = async () => {
        try {
            const response = await getPokemon(pokemon.url)
            setDetails(response)
            openModal()
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
                <Modal
                  id="any-unique-identifier"
                  isOpen={isModalOpen}
                  transition={ModalTransition.SCALE}
                >
                    <button onClick={closeModal} className='btn-close'><p className='btn-close-icon'>x</p></button>
                    <PokeDetails details={details} />
                </Modal>
            </div>
    )
}
