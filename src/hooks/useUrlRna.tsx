import { useEffect, useState } from "react";
/**
 *
 *
 * @export
 * @param {string} searchInputValue
 * @param {number} page
 * @param {number} rowsPerPage
 * @return {*}
 */
export default function useUrlRna(
  searchInputValue: string,
  page: number,
  rowsPerPage: number
) {
  const [urlRna, setUrlRna] = useState("");
  useEffect(() => {
    page += 1;
    let URIEncoded: string = encodeURI(searchInputValue);
    setUrlRna(
      `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${URIEncoded}?per_page=${rowsPerPage}&page=${page}`
    );
    console.log(urlRna);
  }, [page, rowsPerPage, searchInputValue]);
  return urlRna;
}
