import React from "react";
import { tipos, raridades } from "./Categorias";

const CategoriaInput = ({ setFiltro }) => {
  // Atualiza os filtros selecionados com base nas checkboxes
  const handleCheckboxChange = (e, categoria) => {
    const { name, checked } = e.target;

    setFiltro((prevFiltro) => {
      const valoresAtuais = prevFiltro[categoria] || [];
      const novosValores = checked
        ? [...valoresAtuais, name]
        : valoresAtuais.filter((valor) => valor !== name);

      return {
        ...prevFiltro,
        [categoria]: novosValores,
      };
    });
  };

  return (
    <div className="categorias">
      {/* Filtro por Tipo */}
      <div className="categoria">
        <div className="tipo">
          <p>Types</p>
          {tipos.map((tipo, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  name={tipo}
                  onChange={(e) => handleCheckboxChange(e, "tipos")}
                />
                {tipo}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Filtro por Raridade */}
      <div className="raridade">
        <p>Rarities</p>
        {raridades.map((raridade, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={raridade}
                onChange={(e) => handleCheckboxChange(e, "raridades")}
              />
              {raridade}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaInput;
