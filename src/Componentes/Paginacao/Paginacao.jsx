import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Paginacao = ({ paginaAtual, paginasTotais, setPaginaAtual }) => {
  const handlePageChange = (event, value) => {
    setPaginaAtual(value);
  };

  return (
    <Pagination
      count={paginasTotais}
      page={paginaAtual}
      onChange={handlePageChange}
      renderItem={(item) => (
        <PaginationItem
          slots={{
            previous: ArrowBackIcon,
            next: ArrowForwardIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default Paginacao;
