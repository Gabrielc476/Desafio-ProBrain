import React from "react";
import "./Card.css";
const Card = ({ key, pokemon, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="cardImagem">
        <img src={pokemon.images.small} alt="" />
      </div>
      <div className="cardInfo">
        <div className="cardDados">
          <h3>
            <strong>{pokemon.name}</strong>
          </h3>
          {pokemon.types.map((tipo) => (
            <p>{tipo}</p>
          ))}
        </div>
        <div className="cardDados">
          {pokemon.types.map((tipo) => (
            <p>Tipo {tipo}</p>
          ))}
          {pokemon.rarity}
        </div>
      </div>
    </div>
  );
};

export default Card;
