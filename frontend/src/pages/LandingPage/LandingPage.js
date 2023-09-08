// General Imports
import React from "react";

// Component Imports
import SearchForm from "../../utils/SearchForm";

// Utility Imports
import "./LandingPage.css";

const LandingPage = () => {
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
