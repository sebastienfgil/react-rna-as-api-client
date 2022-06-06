import { useEffect, useState } from "react";
/**
 *
 *
 * @export
 * @param {string} searchValue
 * @param {number} page
 * @param {number} rowsPerPage
 * @return {*}
 */
export default function useUrlRna(searchValue: string, page: number) {
  const [urlRna, setUrlRna] = useState("");
  useEffect(() => {
    let URIEncoded: string = encodeURI(searchValue);
    if (page > 0) {
      setUrlRna(
        `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${URIEncoded}?per_page=100&page=${page.toString()}`
      );
    } else {
      setUrlRna("");
    }
  }, [searchValue, page]);
  return urlRna;
}
