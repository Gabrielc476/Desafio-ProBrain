import React from "react";
import "./Habilidades.css";

const Habilidades = ({ abilities }) => {
  return (
    <div className="habilidades">
      <div className="tituloDados">
        <p className="icone">icone</p>
        <strong>
          <p>Habilidades</p>
        </strong>
      </div>
      <div className="habilidadeDados">
        {abilities.map((habilidade) => (
          <div className="habilidade">
            <p>{habilidade.name}</p>
            <p>{habilidade.type}</p>
            <p>{habilidade.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
