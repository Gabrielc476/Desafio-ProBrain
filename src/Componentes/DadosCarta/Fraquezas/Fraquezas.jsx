import React from "react";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

const Fraquezas = ({ fraquezas }) => {
  return (
    <div className="fraquezas">
      <div className="tituloDados">
        <p className="icone">
          <CatchingPokemonTwoToneIcon />
        </p>
        <strong>
          <h2>Weaknesses</h2>
        </strong>
      </div>
      <div className="fraquezasDados">
        {fraquezas.map((fraqueza, index) => (
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
