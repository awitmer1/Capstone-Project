// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";

// Utility Imports
import SearchContext from "../../context/SearchContext";

const MoreResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [moreRests, setMoreRests] = useState([]);
  const [moreDogParks, setMoreDogParks] = useState([]);
  const [morePubParks, setMorePubParks] = useState([]);
  const [morePetStores, setMorePetStores] = useState([]);
  const [moreVets, setMoreVets] = useState([]);
  const [moreHosps, setMoreHosps] = useState([]);

  async function fetchMoreRestaurants(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&term=dog%20friendly&sort_by=best_match&categories=restaurants";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMoreRests(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreDogParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=dog_parks";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMoreDogParks(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMorePubParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=parks";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMorePubParks(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMorePetStores(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=pet%20store";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMorePetStores(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreVets(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=Vet";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMoreVets(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreHosps(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=emergency%20pet";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setMoreHosps(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  switch (category) {
    case "restaurants":
      fetchMoreRestaurants(search);
      break;
    case "dog-parks":
      fetchMoreDogParks(search);
      break;
    case "pub-parks":
      fetchMorePubParks(search);
      break;
    case "pet-stores":
      fetchMorePetStores(search);
      break;
    case "vets":
      fetchMoreVets(search);
      break;
    case "hospitals":
      fetchMoreHosps(search);
      break;
    default:
      console.log("No data returned");
      break;
  }

  return (
    <>
      <div className="back-to-results-page">
        <Link to={`/results`}>
          <p>Back</p>
        </Link>
      </div>
      <p>Additional Results for: {search}</p>
    </>
  );
};

export default MoreResultsPage;
