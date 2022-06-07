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
export default function useUrlAdr(address: string, inseeCode: string) {
  const [urlAdr, setUrlAdr] = useState("");
  useEffect(() => {
    if (address !== "" && inseeCode !== "") {
      let adrEncoded: string = address.replaceAll(" ", "+");
      setUrlAdr(
        `https://api-adresse.data.gouv.fr/search/?q=${adrEncoded}&citycode=${inseeCode}`
      );
    }
  }, [address, inseeCode]);
  return urlAdr;
}
