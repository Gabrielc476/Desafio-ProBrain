import {
  filtrarPorNome,
  filtrarPorTipos,
  filtrarPorRaridades,
} from "./EstrategiasFiltros";

export const aplicarFiltros = (pokemon, filtroPesquisa, filtroCategoria) => {
  let valido = true;

  // Filtragem por nome
  valido = valido && filtrarPorNome(pokemon, filtroPesquisa);

  // Filtragem por tipos
  valido = valido && filtrarPorTipos(pokemon, filtroCategoria);

  // Filtragem por raridade
  valido = valido && filtrarPorRaridades(pokemon, filtroCategoria);

  return valido;
};
