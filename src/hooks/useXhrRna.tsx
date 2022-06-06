import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Association, { AssociationI } from "../models/Association";
import camelcaseKeys from "camelcase-keys";
import RnaConnector from "../models/RnaConnector";
/**
 *
 *
 * @export
 * @param {string} searchInputValue
 * @return {*}  {Association[]}
 */
export default function useXhrRna(
  urlRna: string,
  rawAssociationsList: Association[],
  setRawAssociationsList: Dispatch<SetStateAction<Association[]>>,
  setRequestedPage: Dispatch<SetStateAction<number>>
) {
  let rnaConnector = RnaConnector.getInstance();

  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    let currentPage = 0;
    let totalPages = 0;
    let xhr = new XMLHttpRequest();

    const loadListener = () => {
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
        setTotalResults(Number(response.total_results));
        currentPage = Number(response.page);
        totalPages = Number(response.total_pages);
        // console.log(`currentPage = ${currentPage}`);
        // console.log(`totalPages = ${totalPages}`);
        response.association.map((asso: any) => {
          let assoTemp: AssociationI = camelcaseKeys(asso) as AssociationI;
          assoArray.push(new Association(assoTemp));
          return assoArray;
        });
        setRawAssociationsList(rawAssociationsList.concat(assoArray));
        if (currentPage < totalPages) {
          // console.log(`next page : ${currentPage + 1}`);
          setRequestedPage(currentPage + 1);
        } else {
          setRequestedPage(0);
        }
      }
    };

    xhr.addEventListener("load", loadListener);
    if (urlRna && urlRna.length > 0) {
      // console.log(`url before call to connector : ${urlRna}`);
      rnaConnector.addToQueue({ url: urlRna, xhr: xhr });
    }

    return function cleanup() {
      xhr.removeEventListener("load", loadListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlRna]);
}
