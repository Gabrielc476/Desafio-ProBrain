import React from "react";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

const Ataques = ({ ataques }) => {
  return (
    <div className="ataques">
      <div className="tituloDados">
        <p className="icone">
          <CatchingPokemonTwoToneIcon />
        </p>
        <strong>
          <h2>attacks</h2>
        </strong>
      </div>
      <div className="ataqueDados">
        {ataques.map((ataque, index) => (
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
