import React, { useEffect, useState } from "react";
import instancia from "../../API/axios";
import "./paginaInicial.css";
import Card from "../../Componentes/Card/card";
import Modal from "../../Componentes/Modal/modal";
import PesquisaInput from "../../Componentes/PesquisaInput/pesquisaInput";
import CategoriaInput from "../../Componentes/CategoriaInput/categoriaInput";
import LoadingPokebola from "../../Componentes/LoadingPokebola/loadingPokebola";
import FilterListIcon from "@mui/icons-material/FilterList";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import Paginacao from "../../Componentes/Paginacao/paginacao";
import { aplicarFiltros } from "../../Estrategias/aplicarFiltros"; // Importando a função de Strategy

const PaginaInicial = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroPesquisa, setFiltroPesquisa] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 20;
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

  const inicioIndex = (paginaAtual - 1) * itensPorPagina;
  const fimIndex = inicioIndex + itensPorPagina;
  const pokemonsAtuais = pokemonsFiltrados.slice(inicioIndex, fimIndex);

  const paginasTotais = Math.ceil(pokemonsFiltrados.length / itensPorPagina);

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
              {pokemonsAtuais.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => abrirModal(pokemon)}
                />
              ))}
            </div>
            <Paginacao
              paginaAtual={paginaAtual}
              paginasTotais={paginasTotais}
              setPaginaAtual={setPaginaAtual}
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
