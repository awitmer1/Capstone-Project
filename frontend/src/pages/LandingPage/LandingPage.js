// General Imports
import React, { useState, useEffect, useContext } from "react";

// Component Imports
import SearchForm from "../../utils/SearchForm";

// Utility Imports
import { KEY } from "../../localKey";
import "./LandingPage.css";
import SearchContext from "../../context/SearchContext";

const LandingPage = () => {

    const { search, setSearch } = useContext(SearchContext);


  return (
    <>
      <div className="centered hero">
        <h1>Traveling with Fido</h1>
        <h2>
          Find Pet-Friendly Businesses, Public Spaces, and Emergency Services in
          Unfamiliar Cities
        </h2>
      </div>

      <div className="centered">
        I am traveling to
        <SearchForm />
      </div>
      <div>
        <p>{search}</p>
      </div>
    </>
  );
};

export default LandingPage;
