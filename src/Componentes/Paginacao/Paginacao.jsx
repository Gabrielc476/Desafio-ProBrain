import React from "react";

const Paginacao = ({ paginaAtual, paginasTotais, setPaginaAtual }) => {
  const numerosPaginas = Array.from({ length: paginasTotais }, (_, i) => i + 1);

  return (
    <div className="paginacao">
      <button
        onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
        disabled={paginaAtual === 1}
      >
        {"<"}
      </button>
      {numerosPaginas.map((pagina) => (
        <button
          key={pagina}
          className={`numeroPagina ${pagina === paginaAtual ? "active" : ""}`}
          onClick={() => setPaginaAtual(pagina)}
        >
          {pagina}
        </button>
      ))}
      <button
        onClick={() =>
          setPaginaAtual((prev) => Math.min(prev + 1, paginasTotais))
        }
        disabled={paginaAtual === paginasTotais}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginacao;
