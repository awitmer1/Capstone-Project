// General Imports
import React from "react";
import { useContext } from "react";

// Component Imports

// Utility Imports
import SearchContext from "../../context/SearchContext";

const ResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
  <>
  <p>{search}</p>
  </>
  );
};

export default ResultsPage;
