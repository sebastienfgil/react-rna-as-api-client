import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";
import RnaConnector from "../models/RnaConnector";
import { useMapEvent } from "react-leaflet";
/**
 *
 *
 * @export
 * @param {string} searchInputValue
 * @return {*}  {Association[]}
 */
export default function useXhrAdr(
  urlAdr: string,
  coordinates: LatLngTuple,
  setCoordinates: Dispatch<SetStateAction<LatLngTuple>>,
) {
  let adrConnector = RnaConnector.getInstance();
  useEffect(() => {
    let xhr = new XMLHttpRequest();

    const loadListener = () => {
      if (xhr.responseText !== null) {
        let response = JSON.parse(xhr.responseText, (key, value) => {
          if (key === "is_waldec") {
            return value === "true" ? true : false;
          }
          if (
            key === "date_creation" ||
            key === "date_derniere_declaration" ||
            key === "date_publication_creation" ||
            key === "date_declaration_dissolution"
          ) {
            return value ? new Date(value) : null;
          }
          return value;
        });
        let coordinatesTemp: LatLngTuple =
          response.features[0].geometry.coordinates.reverse() as LatLngTuple;
        console.log(JSON.stringify(coordinatesTemp));
        setCoordinates(coordinatesTemp as LatLngTuple);
        let element = document.getElementById("map-component");
        if (element) {
          element.dispatchEvent(new Event("click"));
        }
      }
    };

    xhr.addEventListener("load", loadListener);
    if (urlAdr && urlAdr.length > 0) {
      // console.log(`url before call to connector : ${urlRna}`);
      adrConnector.addToQueue({ url: urlAdr, xhr: xhr });
    }

    return function cleanup() {
      xhr.removeEventListener("load", loadListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlAdr]);
}
