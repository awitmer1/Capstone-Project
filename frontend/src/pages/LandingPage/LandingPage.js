// General Imports
import React, { useState, useEffect } from "react";

// Component Imports
import SearchForm from "../../utils/SearchForm";

// Utility Imports
import { KEY } from "../../localKey";
import "./LandingPage.css";

const LandingPage = () => {
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
    </>
  );
};

export default LandingPage;
