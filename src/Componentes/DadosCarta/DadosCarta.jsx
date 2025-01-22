import React from "react";

import Fraquezas from "./Fraquezas/fraquezas";
import Habilidades from "./Habilidades/habilidades";
import "./dadosCarta.css";
import Ataques from "./Ataques/ataques";

const DadosCarta = ({ pokemon }) => {
  return (
    <div className="dadosCarta">
      <Ataques ataques={pokemon.attacks} />
      <hr className="linha" />
      <Fraquezas fraquezas={pokemon.weaknesses} />
      <hr className="linha" />
      <Habilidades habilidades={pokemon.abilities} />
    </div>
  );
};

export default DadosCarta;
