// strategies/filterByName.js
export const filterByName = (pokemon, filtroPesquisa) => {
  return pokemon.name.toLowerCase().includes(filtroPesquisa.toLowerCase());
};

// strategies/filterByTypes.js
export const filterByTypes = (pokemon, filtroCategoria) => {
  const tiposSelecionados = filtroCategoria["tipos"];
  if (!tiposSelecionados || tiposSelecionados.length === 0) return true;
  return pokemon.types?.some((tipo) => tiposSelecionados.includes(tipo));
};

// strategies/filterByRarities.js
export const filterByRarities = (pokemon, filtroCategoria) => {
  const raridadesSelecionadas = filtroCategoria["raridades"];
  if (!raridadesSelecionadas || raridadesSelecionadas.length === 0) return true;
  return raridadesSelecionadas.includes(pokemon.rarity);
};
