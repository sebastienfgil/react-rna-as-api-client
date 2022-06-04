import { useEffect, useState } from "react";
import Association, { AssociationI } from "../models/Association";
import camelcaseKeys from "camelcase-keys";
/**
 *
 *
 * @export
 * @param {string} searchInputValue
 * @return {*}  {Association[]}
 */
export default function useXhrRna(
  searchInputValue: string,
  urlRna: string
): any[] {
  let emptyAssoArray: Association[] = new Array<Association>();
  const [associationsList, setAssociationsList] = useState(emptyAssoArray);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    let xhr = new XMLHttpRequest();

    const loadListener = () => {
      console.log(xhr.responseText);
      if (xhr.responseText !== null) {
        let assoArray: Association[] = new Array<Association>();
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
        setTotalResults(response.total_results);
        response.association.map((asso: any) => {
          let assoTemp: AssociationI = camelcaseKeys(asso) as AssociationI;
          assoArray.push(new Association(assoTemp));
          return assoArray;
        });
        setAssociationsList(assoArray);
      }
    };
    xhr.addEventListener("load", loadListener);
    if (searchInputValue && searchInputValue.trim().length > 2) {
      xhr.open("GET", urlRna);

      xhr.send();
    } else {
      setAssociationsList([]);
      setTotalResults(0);
    }

    return function cleanup() {
      xhr.removeEventListener("load", loadListener);
    };
  }, [searchInputValue, urlRna]);

  return [associationsList, totalResults];
}
