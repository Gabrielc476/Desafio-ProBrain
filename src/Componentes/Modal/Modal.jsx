import DadosCarta from "../DadosCarta/DadosCarta";
import "./Modal.css";

const Modal = ({ pokemon, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="cabecalho">
          <h2>{pokemon.name}</h2>
          <button onClick={onClose} className="modal-close">
            Fechar
          </button>
        </div>
        <div className="modalMeio">
          <img src={pokemon.images.small} alt="" />
          <div className="tipoContainer">
            {pokemon.types.map((tipo) => (
              <p className="tipo">{tipo}</p>
            ))}
          </div>
        </div>
        <div className="dados">
          <DadosCarta pokemon={pokemon} />
        </div>
        <div className="descricao">
          <p>{pokemon.flavorText}</p>
        </div>
        <div className="Artista">
          <strong>
            <p>Artista</p>
          </strong>
          <p className="artistaNome">{pokemon.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
