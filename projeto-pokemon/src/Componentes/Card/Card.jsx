import React from 'react'
import "./Card.css"
const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className='cardImagem'>
            <img src={pokemon.images.small} alt="" />
        </div>
        <div className='cardInfo'>
            <div className='cardDados'>
                {pokemon.name}
                {pokemon.types.map((tipo) => (
                    <p>{tipo}</p>
                ))}
            </div>
            <div className='cardDados'>
            {pokemon.types.map((tipo) => (
                    <p>Tipo {tipo}</p>
                ))}
            {pokemon.rarity}
            </div>
        </div>
    </div>
  )
}

export default Card