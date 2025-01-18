import React from "react";

import Fraquezas from "./Fraquezas/Fraquezas";
import Habilidades from "./Habilidades/Habilidades";
import "./DadosCarta.css";
import Ataques from "./Ataques/Ataques";

const DadosCarta = ({ pokemon }) => {
  return (
    <div className="dadosCarta">
      <Ataques attacks={pokemon.attacks} />
      <Fraquezas weaknesses={pokemon.weaknesses} />
      <Habilidades abilities={pokemon.abilities} />
    </div>
  );
};

export default DadosCarta;
