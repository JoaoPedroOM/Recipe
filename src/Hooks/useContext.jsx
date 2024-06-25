import { createContext, useEffect } from "react";
import { RECIPE_GET } from '../Api/api';
import useFetch from "../Hooks/useFetch";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchRecipe() {
      const { url, options } = RECIPE_GET();
      await request(url, options);
    }
    fetchRecipe();
  }, [request]);

  return (
    <ApiContext.Provider value={{data, loading, error}}>
        {children}
    </ApiContext.Provider>
    );
};

export { ApiProvider, ApiContext };
