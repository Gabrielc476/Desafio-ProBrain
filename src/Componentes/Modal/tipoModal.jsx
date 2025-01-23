import React from "react";

const TipoModal = ({ tipo }) => {
  const selecionarCor = (tipo) => {
    switch (tipo) {
      case "Fire":
        return "#ff5a01"; // laranja avermelhado
      case "Water":
        return "#5ddfff"; // azul
      case "Grass":
        return "#00ff11"; // verde
      case "Colorless":
        return "#f9f9f9"; // cinza
      case "Psychic":
        return "#fb8fe2"; // rosa
      case "Darkness":
        return "#4c4c4c"; // escuro prateado
      case "Fighting":
        return "#ffc568"; // marrom claro
      case "Metal":
        return "silver"; // prata
      case "Lightning":
        return "#fff00f"; // amarelo
      case "Dragon":
        return "#ffce00"; // dourado
      default:
        return "transparent"; // valor padrão
    }
  };

  return (
    <span
      className="tipoModal"
      style={{ backgroundColor: selecionarCor(tipo) }}
    >
      {tipo}
    </span>
  );
};

export default TipoModal;
