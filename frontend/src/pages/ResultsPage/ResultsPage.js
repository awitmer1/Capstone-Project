// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";

// Component Imports

// Utility Imports
import SearchContext from "../../context/SearchContext";

const ResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [initRests, setInitRests] = useState([]);

  async function fetchRestaurants(search) {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&term=dog%20friendly&limit=3&sort_by=best_match&categories=restaurants";`,
      {
        headers: { Authorization: `Bearer ${KEY}`, accept: `application/json` },
      }
    );
    console.log("User search results");
    console.log(response.data.businesses);
    setInitRests(response.data.businesses);
  }

  useEffect(() => {
    fetchRestaurants(search);
  }, []);

  return (
    <>
      <p>Results for: {search}</p>
      <div>
        <h3>Restaurants</h3>
        {console.log("initRests check for mapping")}
        {console.log(initRests)}
        {initRests &&
          initRests.map((item) => {
            return (
              <>
                <p>{item.name}</p>
                <p style={{ color: "grey" }}>{item.categories[0].title}</p>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ResultsPage;
