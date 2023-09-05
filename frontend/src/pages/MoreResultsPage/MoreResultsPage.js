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

  // State(s) for default business search
  const [moreRests, setMoreRests] = useState([]);
  const [moreDogParks, setMoreDogParks] = useState([]);
  const [morePubParks, setMorePubParks] = useState([]);
  const [morePetStores, setMorePetStores] = useState([]);
  const [moreVets, setMoreVets] = useState([]);
  const [moreHosps, setMoreHosps] = useState([]);

  // State(s) for 'Open Now' search
  const [openNow, setOpenNow] = useState(false);
  const [openRests, setOpenRests] = useState([]);
  const [openDogParks, setOpenDogParks] = useState([]);
  const [openPubParks, setOpenPubParks] = useState([]);
  const [openPetStores, setOpenPetStores] = useState([]);
  const [openVets, setOpenVets] = useState([]);
  const [openHosps, setOpenHosps] = useState([]);

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
      setMoreRests(response.data.businesses);
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
      setMoreDogParks(response.data.businesses);
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
      setMorePubParks(response.data.businesses);
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
      setMorePetStores(response.data.businesses);
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
      setMoreVets(response.data.businesses);
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
      setMoreHosps(response.data.businesses);
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
      setOpenRests(response.data.businesses);
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
      console.log("User search results");
      console.log(response.data.businesses);
      setOpenDogParks(response.data.businesses);
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
      console.log("User search results");
      console.log(response.data.businesses);
      setOpenPubParks(response.data.businesses);
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
      console.log("User search results");
      console.log(response.data.businesses);
      setOpenPetStores(response.data.businesses);
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
      console.log("User search results");
      console.log(response.data.businesses);
      setOpenVets(response.data.businesses);
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
      setOpenHosps(response.data.businesses);
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

  // Utility function to check state for each category
  const displayState = () => {
    console.log(moreRests);
    console.log(openRests);
    console.log(moreDogParks);
    console.log(openDogParks);
    console.log(morePubParks);
    console.log(openPubParks);
    console.log(morePetStores);
    console.log(openPetStores);
    console.log(moreVets);
    console.log(openVets);
    console.log(moreHosps);
    console.log(openHosps);
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
        {console.log(category)}
        <p>Additional Results for: {search}</p>
        <OpenNowButton toggleOpen={toggleOpen} />
      </div>
      {openNow && <p>Open Now</p>}
      {!openNow ? (
        <ResultsCards inputs={moreRests} />
      ) : (
        <ResultsCards inputs={openRests} />
      )}
      {!openNow ? (
        <ResultsCards inputs={moreDogParks} />
      ) : (
        <ResultsCards inputs={openDogParks} />
      )}
      {!openNow ? (
        <ResultsCards inputs={morePubParks} />
      ) : (
        <ResultsCards inputs={openPubParks} />
      )}
      {!openNow ? (
        <ResultsCards inputs={morePetStores} />
      ) : (
        <ResultsCards inputs={openPetStores} />
      )}
      {!openNow ? (
        <ResultsCards inputs={moreVets} />
      ) : (
        <ResultsCards inputs={openVets} />
      )}
      {!openNow ? (
        <ResultsCards inputs={moreHosps} />
      ) : (
        <ResultsCards inputs={openHosps} />
      )}
    </div>
  );
};

export default MoreResultsPage;
