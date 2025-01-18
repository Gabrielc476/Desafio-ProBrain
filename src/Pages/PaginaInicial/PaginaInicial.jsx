import React, { useEffect, useState } from "react";
import instancia from "../../API/axios";
import "./PaginaInicial.css";
import Card from "../../Componentes/Card/Card";
import Modal from "../../Componentes/Modal/Modal";

const PaginaInicial = () => {
  const [pokemons, setPokemons] = useState([]); // Todos os pokémons
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const itemsPerPage = 20; // Itens por página
  const [modal, setModal] = useState(false); // Estado do modal
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Pokémon selecionado para o modal

  async function pegarPokemons() {
    try {
      const response = await instancia.get("/cards");
      setPokemons(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar pokémons:", error);
    }
  }

  useEffect(() => {
    pegarPokemons();
  }, []);

  // Determina os pokémons a serem exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  // Total de páginas
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  // Gera os números de página
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Abrir o modal
  const abrirModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    console.log(pokemon);
    console.log(selectedPokemon);
    console.log("oi");
    setModal(true);
  };

  // Fechar o modal
  const fecharModal = () => {
    setSelectedPokemon(null);
    setModal(false);
  };

  return (
    <div className="paginaInicial">
      <div className="filtragem">
        <p>Filtro por pesquisa</p>
        <p>Filtro por categoria</p>
      </div>
      <div className="listaPokemons">
        <p>Total: {pokemons.length} pokémons</p>
        <div className="cards">
          {currentPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => abrirModal(pokemon)}
            />
          ))}
        </div>
        {/* Paginação */}
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
              className={`page-number ${page === currentPage ? "active" : ""}`}
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
        <>
          {console.log("Modal está sendo renderizado")}
          <Modal pokemon={selectedPokemon} onClose={fecharModal} />
        </>
      )}
    </div>
  );
};

export default PaginaInicial;
