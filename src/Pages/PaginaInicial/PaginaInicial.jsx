import React, { useEffect, useState } from "react";
import instancia from "../../API/axios";
import "./PaginaInicial.css";
import Card from "../../Componentes/Card/Card";
import Modal from "../../Componentes/Modal/Modal";
import PesquisaInput from "../../Componentes/PesquisaInput/PesquisaInput";
import CategoriaInput from "../../Componentes/CategoriaInput/CategoriaInput";
import LoadingPokebola from "../../Componentes/LoadingPokebola/LoadingPokebola";
import FilterListIcon from "@mui/icons-material/FilterList";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import Paginacao from "../../Componentes/Paginacao/Paginacao";
import { aplicarFiltros } from "../../Strategies/aplicarFiltros"; // Importando a função de Strategy

const PaginaInicial = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroPesquisa, setFiltroPesquisa] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState({});
  const [mostrarCategorias, setMostrarCategorias] = useState(true);

  async function pegarPokemons() {
    try {
      setLoading(true);
      const response = await instancia.get("/cards");
      setPokemons(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar pokémons:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    pegarPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    aplicarFiltros(pokemon, filtroPesquisa, filtroCategoria)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemonsFiltrados.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemonsFiltrados.length / itemsPerPage);

  const abrirModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setModal(true);
  };

  const fecharModal = () => {
    setSelectedPokemon(null);
    setModal(false);
  };

  return (
    <div className="paginaInicial">
      {loading ? (
        <LoadingPokebola />
      ) : (
        <>
          <div className="filtragem">
            <PesquisaInput setFiltroPesquisa={setFiltroPesquisa} />
            <div className="filtroCategoria">
              <div className="filtroCategoriaTitulo">
                <FilterListIcon
                  onClick={() => setMostrarCategorias((prev) => !prev)}
                  className="filtroButton"
                />
                <p>filtros</p>
              </div>

              {mostrarCategorias && (
                <div className="filtragemCategoria">
                  <CategoriaInput setFiltro={setFiltroCategoria} />
                </div>
              )}
            </div>
          </div>
          <div className="listaPokemons">
            <div className="total">
              <CatchingPokemonTwoToneIcon />
              <p>Total: {pokemonsFiltrados.length} pokémons</p>
            </div>
            <div className="cards">
              {currentPokemons.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => abrirModal(pokemon)}
                />
              ))}
            </div>
            <Paginacao
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
          {modal && selectedPokemon && (
            <Modal pokemon={selectedPokemon} onClose={fecharModal} />
          )}
        </>
      )}
    </div>
  );
};

export default PaginaInicial;
