import DadosCarta from "../DadosCarta/dadosCarta";
import "./modal.css";

const Modal = ({ pokemon, onClose }) => {
  return (
    <div className="modal">
      <div className="modalConteudo">
        <div className="cabecalho">
          <h2 className="titulo">{pokemon.name}</h2>
          <button onClick={onClose} className="modalFechar">
            ✕
          </button>
        </div>
        <div className="modalMeio">
          <div className="imagemContainer">
            <img
              src={pokemon.images.small}
              alt={pokemon.name}
              className="imagem"
            />
          </div>
          <div className="tiposModal">
            {pokemon.types.map((tipo) => (
              <span className="tipoModal" key={tipo}>
                {tipo}
              </span>
            ))}
          </div>
        </div>
        <div className="dados">
          <DadosCarta pokemon={pokemon} />
        </div>
        <div className="descricao">
          <p>{pokemon.flavorText}</p>
        </div>
        <div className="artista">
          <strong>Artista:</strong> <p>{pokemon.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
