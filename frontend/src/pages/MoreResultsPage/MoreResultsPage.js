// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import "./MoreResultsPage.css";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";
import OpenNowButton from "../../components/OpenNowButton/OpenNowButton";

// Utility Imports
import SearchContext from "../../context/SearchContext";
import CategoryContext from "../../context/CategoryContext";

const MoreResultsPage = () => {
  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);
  const [openNow, setOpenNow] = useState(false);
  const [moreBusinesses, setMoreBusinesses] = useState([]);
  const [openBusinesses, setOpenBusinesses] = useState([]);

  // API Calls to fetch more results per category - run on switch case
  async function fetchMoreRestaurants(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&term=dog%20friendly&sort_by=best_match&categories=restaurants`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreDogParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=dog_parks`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMorePubParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=parks`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMorePetStores(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=pet%20store`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreVets(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=Vet`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMoreHosps(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=emergency%20pet`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setMoreBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  // API Calls for 'Open Now' businesses
  async function fetchOpenRests(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&term=dog%20friendly&sort_by=best_match&categories=restaurants&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results (Open Now)");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOpenDogParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=dog_parks&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results (Open Now)");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOpenPubParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=parks&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results (Open Now)");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOpenPetStores(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=pet%20store&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results (Open Now)");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOpenVets(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=Vet&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results (Open Now)");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOpenHosps(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=emergency%20pet`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("User search results");
      console.log(response.data.businesses);
      setOpenBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  //   Runs based on useContext(CategoryContext) passed from previous page (ResultsPage.js)
  const renderSwitch = (param) => {
    switch (param) {
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
  };

  //   Runs 'Open Now" based on useContext(CategoryContext) passed from previous page (ResultsPage.js)
  const openSwitch = (param) => {
    switch (param) {
      case "restaurants":
        fetchOpenRests(search);
        break;
      case "dog-parks":
        fetchOpenDogParks(search);
        break;
      case "pub-parks":
        fetchOpenPubParks(search);
        break;
      case "pet-stores":
        fetchOpenPetStores(search);
        break;
      case "vets":
        fetchOpenVets(search);
        break;
      case "hospitals":
        fetchOpenHosps(search);
        break;
      default:
        console.log("No data returned");
        break;
    }
  };

  // Button toggle for Open Now filter
  const toggleOpen = () => {
    setOpenNow(!openNow);
  };

  useEffect(() => {
    renderSwitch(category);
    openSwitch(category);
  }, []);

  return (
    <div className='more-results-container'>
      <div className='more-results-header'>
        <div className='back-to-results-page'>
          <Link to={`/results`}>
            <p>Back</p>
          </Link>
        </div>
        <p>Additional Results for: {search}</p>
        <OpenNowButton toggleOpen={toggleOpen} />
      </div>
      {openNow && <p className='open-text'>Open Now Businesses</p>}
      {!openNow ? (
        <ResultsCards inputs={moreBusinesses} />
      ) : (
        <ResultsCards inputs={openBusinesses} />
      )}
    </div>
  );
};

export default MoreResultsPage;
