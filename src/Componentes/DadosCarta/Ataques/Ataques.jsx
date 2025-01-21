import React from "react";
import "./Ataques.css";

const Ataques = ({ attacks }) => {
  return (
    <div className="ataques">
      <div className="tituloDados">
        <p className="icone">icone</p>
        <strong>
          <p>ataques</p>
        </strong>
      </div>
      <div className="ataqueDados">
        {attacks.map((ataque, index) => (
          <div className="ataque" key={index}>
            <div className="titulo">
              <p>{ataque.name}</p>
              <p>{ataque.damage}</p>
            </div>
            <div className="descrição">
              <p>{ataque.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ataques;
