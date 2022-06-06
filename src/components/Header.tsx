import { Helmet } from "react-helmet";
import {
  Grid,
  Typography,
  Paper,
  Container,
  Stack,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

import Association from "../models/Association";

export const Header = (
  associationsList: Association[],
  setAssociationsList: React.Dispatch<React.SetStateAction<Association[]>>,
  searchInputValue: string,
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  setRequestedPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const handleSearchButtonClick = () => {
    // let searchValueTemp: string;
    // if (searchInputValue.length < 3) {
    // } else {
    //   searchValueTemp = searchInputValue;
    //   setSearchValue(searchValueTemp);
    // }
    let emptyAssoArray: Association[] = new Array<Association>();
    setAssociationsList(emptyAssoArray);
    setRequestedPage(1);
    setSearchValue(searchInputValue);
  };
  return (
    <Paper elevation={1}>
      <header className="App-header">
        <Container className="App" sx={{ width: "100vw" }}>
          <Grid
            container
            spacing={2}
            // sx={{ flex: "1", justifySelf: "center" }}
          >
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
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
                  sx={{ flex: "1" }}
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSearchButtonClick()}
                >
                  <SendIcon />
                </Button>
              </Stack>
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Typography variant="body1">
                Chargement de {associationsList.length} résultats
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </header>
    </Paper>
  );
};
