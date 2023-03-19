import axios from "axios";
import { useEffect, useState } from "react";

const useGetInformation = (
  title,
  search,
  setState,
  setSearch,
  setOpenError
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) return;
    if (!title) return;
    setLoading(true);
    axios
      .get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${title
          .split(" ")
          .join("_")}`
      )
      .then((response) => {
        setState(response.data.extract);
        setLoading(false);
        setSearch(false);
      })
      .catch((error) => {
        setOpenError(true);
        if (error.response.status === 404) {
          setError("No se encontró la palabra buscada");
          setSearch(false);
          return setLoading(false);
        }
        setError(error.message);
        setLoading(false);
        setSearch(false);
      });
  }, [title, search, setState, setSearch, setOpenError]);

  return {
    loading,
    error,
  };
};

export default useGetInformation;
