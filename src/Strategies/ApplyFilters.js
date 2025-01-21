import {
  filterByName,
  filterByTypes,
  filterByRarities,
} from "./FilterStrategies";

export const applyFilters = (pokemon, filtroPesquisa, filtroCategoria) => {
  let isValid = true;

  // Filtragem por nome
  isValid = isValid && filterByName(pokemon, filtroPesquisa);

  // Filtragem por tipos
  isValid = isValid && filterByTypes(pokemon, filtroCategoria);

  // Filtragem por raridade
  isValid = isValid && filterByRarities(pokemon, filtroCategoria);

  return isValid;
};
