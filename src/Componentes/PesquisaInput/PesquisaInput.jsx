import React, { useState } from "react";
import "./PesquisaInput.css";

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
          placeholder="Pesquise um pokemon"
          value={nome}
          onChange={handleChange}
          className="pesquisaInput"
        />
      </div>
    </form>
  );
};

export default PesquisaInput;
