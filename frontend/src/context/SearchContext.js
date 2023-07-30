import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState([]);

  const context = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
