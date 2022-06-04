import { useState } from "react";

import Association from "./models/Association";
import useXhrRna from "./hooks/useXhrRna";
import useUrlRna from "./hooks/useUrlRna";
import {
  TextField,
  Container,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { FicheAssociation } from "./components/ficheAssociation";

import "./App.css";
import { SearchResults } from "./components/searchResults";

function App() {
  const [searchInputValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedAssociation, setSelectedAssociation] = useState(
    new Association()
  );

  const urlRna = useUrlRna(searchInputValue, page, rowsPerPage);
  const [associationsList, totalResults] = useXhrRna(searchInputValue, urlRna);

  const handleSearchInputChange = (value: string) => {
    if (value.length < 3) {
      setSelectedAssociation(new Association());
      setPage(0);
    }
    setSearchValue(value);
  };

  return (
    <>
      <Paper elevation={1}>
        <header className="App-header">
          <Container className="App" sx={{ width: "100vw" }}>
            <Grid
              container
              spacing={2}
              sx={{ flex: "1", justifySelf: "center" }}
            >
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label={null}
                  variant="standard"
                  value={searchInputValue}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => handleSearchInputChange(e.target.value)}
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </header>
      </Paper>
      <Container className="App" sx={{ width: "100vw", height: "100vh" }}>
        <Grid container spacing={2} sx={{ flex: "1", justifySelf: "center" }}>
          <Grid item xs={12}></Grid>
          <Grid item xs={4} sx={{ height: "calc(100vh - 88px - 16px)" }}>
            {associationsList.length > 0
              ? SearchResults(
                  associationsList,
                  totalResults,
                  page,
                  setPage,
                  rowsPerPage,
                  setRowsPerPage,
                  setSelectedAssociation
                )
              : null}
          </Grid>
          <Grid item xs={8} sx={{ height: "calc(100vh - 88px - 16px)" }}>
            {selectedAssociation.id !== 0
              ? FicheAssociation(selectedAssociation)
              : null}
          </Grid>
          <Grid item xs={12}>
            <footer className="App-footer"></footer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
