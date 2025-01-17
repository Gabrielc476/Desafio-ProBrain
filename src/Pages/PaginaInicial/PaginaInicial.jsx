import React from "react";
import "./PaginaInicial.css";

const PaginaInicial = () => {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    let card = "card";
    arr.push(card);
  }

  return (
    <div className="paginaInicial">
      <div className="filtragem">
        <p>filtro por pesquisa</p>
        <p>filtro por categoria</p>
      </div>
      <div className="listaPokemons">
        <p>numero de pokemons</p>
        <div className="cards">
          {arr.map((card) => (
            <p key={card.indexOf}>card</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
