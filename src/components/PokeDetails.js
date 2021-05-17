import '../assets/css/PokeDetails.css'

export default function PokeDetails({details}) {
    console.log(details)
    return (
        <div className='details'>
            <div>
                <img src={details.sprites.front_default}/>
                <img src={details.sprites.back_default}/>
                <h3>{details.name}</h3>
                <h4>Altura: {details.height}</h4>
                <h4>Peso: {details.weight}</h4>
                <h4>Experiencia base: {details.base_experience}</h4>

            </div>
            <div>
                <strong>Habilidades</strong>
                {
                    details.abilities.map(ability => {
                        return <p key={ability.ability.name}>{ability.ability.name}</p>
                    })
                }
            </div>
            <div>
                <strong>Tipos</strong>
                {
                    details.types.map(type => {
                        return <p key={type.type.name}>{type.type.name}</p>
                    })
                }
            </div>
            <div>
                <strong>Stats</strong>
                {
                    details.stats.map(stat => {
                        return <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                    })
                }
            </div>
            <div>
                <strong>Movimientos</strong>
                {
                    details.moves.map((move, index) => {
                        return <p key={move.move.name}>#{index} - {move.move.name}</p>
                    })
                }
            </div>
        </div>
    )
}
