import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useGetInformation from "../hooks/useGetInformation";
import ViewInformation from "./ViewInformation";

const SearchView = () => {
  const [title, setTitle] = useState("");
  const [word, setWord] = useState("");
  const [data, setData] = useState("");
  const [search, setSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openError, setOpenError] = useState(false);

  const { loading, error } = useGetInformation(
    title,
    search,
    setData,
    setSearch,
    setOpenError
  );

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeWord = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(true);
    setOpenModal(true);
    setData("");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  return (
    <Paper
      sx={{
        width: "60vw",
        height: "60vh",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ width: "80%", margin: "1rem" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "32px",
              textTransform: "uppercase",
            }}
          >
            Buscador de palabras en wikipedia
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <TextField
            variant="outlined"
            label={"Ingresar busqueda en wikipedia"}
            fullWidth
            sx={{ marginBottom: "1rem" }}
            onChange={handleChangeTitle}
          />
          <TextField
            variant="outlined"
            label={"Ingresar palabra"}
            fullWidth
            onChange={handleChangeWord}
            sx={{
              marginBottom: "1rem",
            }}
          />
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <LoadingButton
            loading={loading}
            variant="contained"
            fullWidth
            onClick={handleSearch}
          >
            Buscar
          </LoadingButton>
        </Grid>
        <ViewInformation
          open={openModal}
          handleClose={handleCloseModal}
          information={data}
          word={word}
        />
      </Grid>

      <Snackbar
        autoHideDuration={4000}
        open={openError}
        onClose={handleCloseError}
      >
        <Alert severity="error">{error} </Alert>
      </Snackbar>
    </Paper>
  );
};

export default SearchView;
