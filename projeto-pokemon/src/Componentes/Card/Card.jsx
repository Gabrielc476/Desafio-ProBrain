import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div>
            <img src={pokemon.images.small} alt="" />
        </div>
        <div>
            <div>
                {pokemon.name}
                {pokemon.types.map((tipo) => (
                    <p>{tipo}</p>
                ))}
            </div>
            <div>
            {pokemon.types.map((tipo) => (
                    <p>{tipo}</p>
                ))}
            {pokemon.rarity}
            </div>
        </div>
    </div>
  )
}

export default Card