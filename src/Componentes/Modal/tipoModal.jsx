import React from "react";

const TipoModal = ({ tipo }) => {
  const selecionarCor = (tipo) => {
    switch (tipo) {
      case "Fire":
        return "red-orange"; // laranja avermelhado
      case "Water":
        return "blue"; // azul
      case "Grass":
        return "green"; // verde
      case "Colorless":
        return "gray"; // cinza
      case "Psychic":
        return "pink"; // rosa
      case "Darkness":
        return "silver-dark"; // escuro prateado
      case "Fighting":
        return "light-brown"; // marrom claro
      case "Metal":
        return "silver"; // prata
      case "Lightning":
        return "yellow"; // amarelo
      case "Dragon":
        return "gold"; // dourado
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
