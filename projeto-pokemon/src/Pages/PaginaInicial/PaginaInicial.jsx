import React, { useEffect, useState } from "react";
import instancia from "../../API/axios";
import "./PaginaInicial.css";
import Card from "../../Componentes/Card/Card";

const PaginaInicial = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function pegarPokemons() {
   await instancia.get("/cards").then((response) =>{
    console.log(response)
    setPokemons( response.data.data)
    
   })
  }

  useEffect(() =>{
    
    pegarPokemons()
    

  },[])

  return (
    <div className="paginaInicial">
      <div className="filtragem">
        <p>filtro por pesquisa</p>
        <p>filtro por categoria</p>
      </div>
      <div className="listaPokemons">
        <p>numero de pokemons {pokemons.length}</p>
        <div className="cards">
          {
            pokemons.map((pokemon) => (
                <Card pokemon={pokemon}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;