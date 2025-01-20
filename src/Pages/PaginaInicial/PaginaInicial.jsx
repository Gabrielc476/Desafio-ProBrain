import React, { useEffect, useState } from "react";
import instancia from "../../API/axios";
import "./PaginaInicial.css";
import Card from "../../Componentes/Card/Card";
import Modal from "../../Componentes/Modal/Modal";
import PesquisaInput from "../../Componentes/PesquisaInput/PesquisaInput";
import CategoriaInput from "../../Componentes/CategoriaInput/CategoriaInput";
import LoadingPokebola from "../../Componentes/LoadingPokebola/LoadingPokebola";

const PaginaInicial = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true); // Estado do loading
  const [filtroPesquisa, setFiltroPesquisa] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState({});

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

  const pokemonsFiltrados = pokemons.filter((pokemon) => {
    const nomeValido = pokemon.name
      .toLowerCase()
      .includes(filtroPesquisa.toLowerCase());
    const filtrosAtivos = Object.keys(filtroCategoria).some(
      (key) => filtroCategoria[key]?.length > 0
    );
    if (!filtrosAtivos) return nomeValido;
    const categoriasValidas = Object.keys(filtroCategoria).every(
      (categoria) => {
        const valoresSelecionados = filtroCategoria[categoria];
        if (!valoresSelecionados || valoresSelecionados.length === 0)
          return true;
        switch (categoria) {
          case "tipos":
            return pokemon.types?.some((tipo) =>
              valoresSelecionados.includes(tipo)
            );
          case "raridades":
            return valoresSelecionados.includes(pokemon.rarity);
          default:
            return true;
        }
      }
    );
    return nomeValido && categoriasValidas;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemonsFiltrados.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemonsFiltrados.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
            <div className="filtragemCategoria">
              <CategoriaInput setFiltro={setFiltroCategoria} />
            </div>
          </div>
          <div className="listaPokemons">
            <p>Total: {pokemonsFiltrados.length} pokémons</p>
            <div className="cards">
              {currentPokemons.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => abrirModal(pokemon)}
                />
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  className={`page-number ${
                    page === currentPage ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
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
