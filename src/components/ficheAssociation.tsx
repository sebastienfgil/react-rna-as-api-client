import { Helmet } from "react-helmet";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import Association from "../models/Association";

export const FicheAssociation = (association: Association) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossOrigin=""
        ></script>
      </Helmet>
      <Card sx={{ maxHeight: "100%", overflow: "auto" }}>
        <CardHeader
          title={association.titre}
          subheader={association.idAssociation}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Typography variant="body2">Date création</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                {association.dateCreation !== new Date(0)
                  ? association.dateCreation.toLocaleDateString("fr")
                  : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Typography variant="body2">Date dernière déclaration</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                {association.dateDerniereDeclaration !== new Date(0)
                  ? association.dateDerniereDeclaration.toLocaleDateString("fr")
                  : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Typography variant="body2">Date publication création</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                {association.datePublicationCreation !== new Date(0)
                  ? association.datePublicationCreation.toLocaleDateString("fr")
                  : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Typography variant="body2">
                Date déclaration dissolution
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                {association.dateDeclarationDissolution !== new Date(0)
                  ? association.dateDeclarationDissolution.toLocaleDateString(
                      "fr"
                    )
                  : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "right" }}>
              <Typography variant="body2">Objet</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">{association.objet}</Typography>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "right" }}>
              <Typography variant="body2">Adresse</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                {association.adresseGestionLibelleVoie}
              </Typography>
              <Typography variant="body1">
                {association.adresseGestionCodePostal}{" "}
                {association.adresseGestionAcheminement}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardMedia>
          <Box sx={{ margin: "16px auto" }}>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "360px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </CardMedia>
      </Card>
    </>
  );
};
