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
      <div className='centered hero-img'>
        <div className='hero-text'>
          <h1>Traveling with Fido</h1>
          <h2>
            Find Pet-Friendly Businesses, Public Spaces, and Emergency Services
            in Unfamiliar Cities
          </h2>
          <div className='hero-search'>
            <p>I am traveling to</p>
            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
