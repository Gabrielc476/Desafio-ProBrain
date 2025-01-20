import React, { useState } from "react";

const PesquisaInput = ({ setFiltroPesquisa }) => {
  const [nome, setNome] = useState("");

  const handleChange = (e) => {
    const valor = e.target.value;
    setNome(valor);
    setFiltroPesquisa(valor); // Atualiza o estado na Página Inicial
  };

  return (
    <form>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Pesquise o nome do Pokémon"
          value={nome}
          onChange={handleChange}
        />
        <button type="submit">Pesquisar</button>
      </div>
    </form>
  );
};

export default PesquisaInput;
