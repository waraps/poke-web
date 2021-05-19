import '../assets/css/PokeDetails.css'

export default function PokeDetails({details}) {
    console.log(details)
    return (
        <div className='details'>
            <div className='poke-info-container'>
                <h1 className='poke-name'>{details.name}</h1>
                <div className='poke-info'>
                    <div className='poke-image-container'>
                        <img src={details.sprites.front_default} width='180'/>
                        <img src={details.sprites.back_default} width='180'/>
                    </div>
                    <div className='poke-details-container'>
                        <div className='poke-details-container-item'>
                            <h3>Altura:</h3>
                            <p className='poke-details-container-item-p'>{details.height}</p>
                        </div>
                        <div className='poke-details-container-item'>
                            <h3>Peso:</h3>
                            <p className='poke-details-container-item-p'>{details.weight}</p>
                        </div>
                        <div className='poke-details-container-item'>
                            <h3>Experiencia base:</h3>
                            <p className='poke-details-container-item-p'>{details.base_experience}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='poke-abilities-types'>
                <div className='poke-info-list'>
                    <h2 className='info-title'>Habilidades</h2>
                    {
                        details.abilities.map(ability => {
                            return <p key={ability.ability.name} className='poke-info-list-item'>{ability.ability.name}</p>
                        })
                    }
                </div>
                <div className='poke-info-list'>
                    <h2 className='info-title'>Tipos</h2>
                    {
                        details.types.map(type => {
                            return <p key={type.type.name} className='poke-info-list-item'>{type.type.name}</p>
                        })
                    }
                </div>
            </div>
            <h2 className='info-title'>Stats</h2>
            <div className='poke-info-list-stats'>
                {
                    details.stats.map(stat => {
                        return <p key={stat.stat.name} className='poke-info-list-item-stats'><strong>{stat.stat.name}:</strong> {stat.base_stat}</p>
                    })
                }
            </div>
            <h2 className='info-title'>Movimientos</h2>
            <div className='poke-info-list-moves'>
                {
                    details.moves.map((move, index) => {
                        return <p key={move.move.name} className='poke-info-list-moves-item'><strong>#{index}</strong> - {move.move.name} </p>
                    })
                }
            </div>
        </div>
    )
}
