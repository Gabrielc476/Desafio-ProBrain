import {
  filtrarPorNome,
  filtrarPorTipos,
  filtrarPorRaridades,
} from "./estrategiasFiltros";

export const aplicarFiltros = (pokemon, filtroPesquisa, filtroCategoria) => {
  let valido = true;

  valido = valido && filtrarPorNome(pokemon, filtroPesquisa);

  valido = valido && filtrarPorTipos(pokemon, filtroCategoria);

  valido = valido && filtrarPorRaridades(pokemon, filtroCategoria);

  return valido;
};
