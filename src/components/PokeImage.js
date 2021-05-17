import React from 'react'

export default function PokeImage({img}) {
    return (
        <div>
            <img 
                alt="logo" 
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${img}.gif`}
                width='80'
                loading="lazy"
            />
        </div>
    )
}
