import React from "react";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

const Habilidades = ({ habilidades }) => {
  return (
    <div className="habilidades">
      <div className="tituloDados">
        <p className="icone">
          <CatchingPokemonTwoToneIcon />
        </p>
        <strong>
          <h2>Abilities</h2>
        </strong>
      </div>
      <div className="habilidadeDados">
        {habilidades && habilidades.length > 0 ? (
          habilidades.map((habilidade, index) => (
            <div className="habilidade" key={index}>
              <p>{habilidade.name}</p>
              <p>{habilidade.type}</p>
              <p>{habilidade.text}</p>
            </div>
          ))
        ) : (
          <p>Este Pokémon não possui habilidades.</p>
        )}
      </div>
    </div>
  );
};

export default Habilidades;
