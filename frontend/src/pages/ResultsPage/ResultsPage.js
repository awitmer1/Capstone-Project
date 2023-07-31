// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";

// Utility Imports
import SearchContext from "../../context/SearchContext";

const ResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [initRests, setInitRests] = useState([]);

  async function fetchRestaurants(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&term=dog%20friendly&limit=3&sort_by=best_match&categories=restaurants";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitRests(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRestaurants(search);
  }, []);

  return (
    <>
      <p>Results for: {search}</p>
      <div className="restaurants-main">
        <h3>Restaurants</h3>
        <ResultsCards inputs={initRests} />
      </div>
    </>
  );
};

export default ResultsPage;
