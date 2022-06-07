import { useEffect, useRef, useState } from "react";

import { LatLngTuple } from "leaflet";

import Association from "./models/Association";
import useXhrRna from "./hooks/useXhrRna";
import useUrlRna from "./hooks/useUrlRna";
import {
  TextField,
  Container,
  Grid,
  Button,
  Stack,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "./App.css";

import { Header } from "./components/Header";
import { SearchResults } from "./components/SearchResults";
import { FicheAssociation } from "./components/FicheAssociation";
import useUrlAdr from "./hooks/useUrlAdr";
import useXhrAdr from "./hooks/useXhrAdr";
import { useMap, useMapEvent } from "react-leaflet";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [requestedPage, setRequestedPage] = useState(0);
  const [displayedPage, setDisplayedPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let emptyAssoArray: Association[] = new Array<Association>();
  const [rawAssociationsList, setRawAssociationsList] =
    useState(emptyAssoArray);
  const [filteredAssociationsList, setFilteredAssociationsList] =
    useState(emptyAssoArray);
  const [selectedAssociation, setSelectedAssociation] = useState(
    new Association()
  );
  let emptyCoordinates: LatLngTuple = [0, 0];
  const [coordinates, setCoordinates] = useState(emptyCoordinates);

  const MapComponent = (props: { id: string }) => {
    const map = useMap();
    map.setView(coordinates);
    return <div id={props.id}></div>;
  };
  const urlAdr = useUrlAdr(
    selectedAssociation.adresseGestionLibelleVoie,
    selectedAssociation.adresseCodeInsee
  );
  useXhrAdr(urlAdr, coordinates, setCoordinates);

  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [postCodeInputValue, setPostCodeInputValue] = useState("");

  useEffect(() => {
    if (postCodeInputValue && postCodeInputValue.length > 0) {
      let filteredListTemp: Association[] = new Array<Association>();
      // setFilteredAssociationsList([]);
      let postCodes: string[] = postCodeInputValue
        .replaceAll(";", ",")
        .split(",")
        .map((v) => v.trim());

      rawAssociationsList.forEach((asso: Association) => {
        let hasPostCode: Boolean = false;
        for (let i = 0; i < postCodes.length; i++) {
          let str: string = postCodes.at(i) as string;
          if (typeof str !== "undefined") {
            if (asso.adresseCodePostal.substring(0, str.length) === str) {
              hasPostCode = true;
              break;
            }
          }
        }
        if (hasPostCode) filteredListTemp = filteredListTemp.concat(asso);
      });
      setFilteredAssociationsList(filteredListTemp);
    } else {
      setFilteredAssociationsList(rawAssociationsList);
    }
  }, [postCodeInputValue, rawAssociationsList]);

  const urlRna = useUrlRna(searchValue, requestedPage);
  useXhrRna(
    urlRna,
    rawAssociationsList,
    setRawAssociationsList,
    setRequestedPage
  );

  const handleFilterexpansion = () => {
    setFiltersExpanded(!filtersExpanded);
  };

  const handlePostCodeInputChange = (value: string) => {
    setPostCodeInputValue(value);
  };

  return (
    <>
      {Header(
        rawAssociationsList,
        setRawAssociationsList,
        searchInputValue,
        setSearchInputValue,
        setSearchValue,
        setRequestedPage
      )}
      <Container className="App" sx={{ width: "100vw", height: "100vh" }}>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "0", flex: "1", justifySelf: "center" }}
        >
          <Grid item xs={12}>
            <Button
              onClick={() => handleFilterexpansion()}
              endIcon={filtersExpanded ? <ExpandLess /> : <ExpandMore />}
            >
              Filtres
            </Button>
            <Collapse in={filtersExpanded} timeout="auto" unmountOnExit>
              <Stack
                direction="row"
                spacing={2}
                sx={{ marginTop: "8px", width: "100%" }}
              >
                <TextField
                  variant="standard"
                  size="small"
                  label="codes postaux"
                  value={postCodeInputValue}
                  onChange={(e) => handlePostCodeInputChange(e.target.value)}
                ></TextField>
              </Stack>
            </Collapse>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", height: "calc(100vh - 88px - 16px - 36px)" }}
          >
            {filteredAssociationsList.length > 0
              ? SearchResults(
                  filteredAssociationsList,
                  filteredAssociationsList.length,
                  displayedPage,
                  setDisplayedPage,
                  rowsPerPage,
                  setRowsPerPage,
                  setSelectedAssociation
                )
              : null}
          </Grid>
          <Grid item xs={8} sx={{ height: "calc(100vh - 88px - 16px - 36px)" }}>
            {selectedAssociation.id !== 0
              ? FicheAssociation(selectedAssociation, coordinates, MapComponent)
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
