import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrassIcon from "@mui/icons-material/Grass";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import SportsMmaIcon from "@mui/icons-material/SportsMma";

const IconeComponente = ({ tipo }) => {
  const selecionarIcone = (tipo) => {
    switch (tipo) {
      case "Fire":
        return (
          <div>
            <WhatshotIcon />
          </div>
        );
      case "Water":
        return (
          <div>
            <WaterDropIcon />
          </div>
        );
      case "Grass":
        return (
          <div>
            <GrassIcon />
          </div>
        );
      case "Colorless":
        return (
          <div>
            <CatchingPokemonTwoToneIcon />
          </div>
        );
      case "Psychic":
        return (
          <div>
            <VisibilityOutlinedIcon />
          </div>
        );
      case "Darkness":
        return (
          <div>
            <ModeNightIcon />
          </div>
        );
      case "Fighting":
        return (
          <div>
            <SportsMmaIcon />
          </div>
        );
      case "Metal":
        return (
          <div>
            <ShieldIcon />
          </div>
        );
      case "Lightning":
        return (
          <div>
            <BoltIcon />
          </div>
        );
      case "Dragon":
        return (
          <div>
            <FontAwesomeIcon icon={faDragon} />
          </div>
        );
      default:
        return <span>tipo</span>;
    }
  };
  return <div>{selecionarIcone(tipo)}</div>;
};

export default IconeComponente;
