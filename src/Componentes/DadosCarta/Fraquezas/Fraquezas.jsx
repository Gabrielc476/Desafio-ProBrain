import React from "react";
import "./Fraquezas.css";

const Fraquezas = ({ weaknesses }) => {
  return (
    <div className="fraquezas">
      <div className="tituloDados">
        <p className="icone">icone</p>
        <strong>
          <p>fraquezas</p>
        </strong>
      </div>
      <div className="fraquezasDados">
        {weaknesses.map((fraqueza, index) => (
          <div className="fraqueza" key={index}>
            <h3>{fraqueza.type}</h3>
            <p>{fraqueza.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fraquezas;
