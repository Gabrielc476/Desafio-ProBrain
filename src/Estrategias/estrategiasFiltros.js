export const filtrarPorNome = (pokemon, filtroPesquisa) => {
  return pokemon.name.toLowerCase().includes(filtroPesquisa.toLowerCase());
};

export const filtrarPorTipos = (pokemon, filtroCategoria) => {
  const tiposSelecionados = filtroCategoria["tipos"];
  if (!tiposSelecionados || tiposSelecionados.length === 0) return true;
  return pokemon.types?.some((tipo) => tiposSelecionados.includes(tipo));
};

export const filtrarPorRaridades = (pokemon, filtroCategoria) => {
  const raridadesSelecionadas = filtroCategoria["raridades"];
  if (!raridadesSelecionadas || raridadesSelecionadas.length === 0) return true;
  return raridadesSelecionadas.includes(pokemon.rarity);
};
