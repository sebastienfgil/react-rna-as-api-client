import {
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import Association from "../models/Association";

export const SearchResults = (
  resultsList: Association[],
  totalResults: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  rowsPerPage: number,
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>,
  setSelectedAssociation: React.Dispatch<React.SetStateAction<Association>>
) => {

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleResultsListItemClick = (assoId: number) => {
    let assoTemp: Association | undefined = resultsList.find(
      (asso: Association) => {
        return asso.id === assoId;
      }
    );
    console.log(JSON.stringify(assoTemp));
    setSelectedAssociation(assoTemp ? assoTemp : new Association());
  };

  return (
    // <div
    //   style={{
    //     height: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     overflow: "hidden",
    //     backgroundColor: "#fff",
    //   }}
    // >
    <Paper
      component="div"
      elevation={1}
      // sx={{ zIndex: "1000" }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <TablePagination
        component="div"
        count={totalResults}
        page={page}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={null}
        onRowsPerPageChange={handleRowsPerPageChange}
        onPageChange={handlePageChange}
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></TablePagination>
      <List className="search-results" sx={{ flex: "1", overflow: "auto" }}>
        <Divider />
        {resultsList && resultsList.length > 0
          ? resultsList.map((asso: Association) => {
              return (
                <>
                  <ListItemButton
                    className="results-list-item"
                    onClick={() => handleResultsListItemClick(asso.id)}
                    key={asso.id}
                  >
                    <ListItem
                      title={asso.titre}
                      key={asso.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        component="div"
                        noWrap
                        style={{ width: "100%" }}
                      >
                        {asso.titre}
                      </Typography>
                      <Typography component="div">
                        {asso.idAssociation}{" "}•{" "}<span>
                          <Chip
                            color={asso.isWaldec ? "success" : "warning"}
                            label={asso.isWaldec ? "waldec" : "import"}
                            size="small"
                            variant="outlined"
                          />
                        </span>
                      </Typography>
                      <Typography>
                        {asso.adresseLibelleCommune} (
                        {asso.adresseCodePostal.slice(0, 2)})
                      </Typography>
                    </ListItem>
                  </ListItemButton>
                  <Divider />
                </>
              );
            })
          : null}
      </List>
    </Paper>
    // </div>
  );
};
