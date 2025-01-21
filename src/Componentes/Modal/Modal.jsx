import DadosCarta from "../DadosCarta/DadosCarta";
import "./Modal.css";

const Modal = ({ pokemon, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="cabecalho">
          <h2 className="titulo">{pokemon.name}</h2>
          <button onClick={onClose} className="modal-close">
            ✕
          </button>
        </div>
        <div className="modal-meio">
          <div className="imagem-container">
            <img
              src={pokemon.images.small}
              alt={pokemon.name}
              className="imagem"
            />
          </div>
          <div className="tipos-modal">
            {pokemon.types.map((tipo) => (
              <span className="tipo-modal" key={tipo}>
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
