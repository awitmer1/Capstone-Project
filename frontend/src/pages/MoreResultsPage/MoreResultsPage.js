// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";
import OpenNowButton from "../../components/OpenNowButton/OpenNowButton";

// Utility Imports
import SearchContext from "../../context/SearchContext";
import CategoryContext from "../../context/CategoryContext";

const MoreResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const { category, setCategory } = useContext(CategoryContext);
  const [moreRests, setMoreRests] = useState([]);
  const [moreDogParks, setMoreDogParks] = useState([]);
  const [morePubParks, setMorePubParks] = useState([]);
  const [morePetStores, setMorePetStores] = useState([]);
  const [moreVets, setMoreVets] = useState([]);
  const [moreHosps, setMoreHosps] = useState([]);
  const [openNow, setOpenNow] = useState(false);

  // API Calls to fetch more results per category - run on switch case
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
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=dog_parks";`,
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
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=parks";`,
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
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=pet%20store";`,
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
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=Vet";`,
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
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&sort_by=best_match&term=emergency%20pet";`,
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

  // Button toggle for Open Now filter
  const toggleOpen = () => {
    setOpenNow(!openNow);
  };

  // Utility function to check state for each category
  const displayState = () => {
    console.log(moreRests);
    console.log(moreDogParks);
    console.log(morePubParks);
    console.log(morePetStores);
    console.log(moreVets);
    console.log(moreHosps);
  };

  //   Placeholder + Function to display results for populated state
  const displayResults = () => {
    {
      moreRests && <ResultsCards inputs={moreRests} />;
    }
    {
      moreDogParks && <ResultsCards inputs={moreDogParks} />;
    }
    {
      morePubParks && <ResultsCards inputs={morePubParks} />;
    }
    {
      morePetStores && <ResultsCards inputs={morePetStores} />;
    }
    {
      moreVets && <ResultsCards inputs={moreVets} />;
    }
    {
      moreHosps && <ResultsCards inputs={moreHosps} />;
    }
  };

  useEffect(() => {
    renderSwitch(category);
  }, []);

  return (
    <>
      <div className='back-to-results-page'>
        <Link to={`/results`}>
          <p>Back</p>
        </Link>
      </div>
      {console.log(category)}
      <p>Additional Results for: {search}</p>
      <OpenNowButton toggleOpen={toggleOpen} />
      {openNow && <p>Open Now</p>}
      {moreRests && <ResultsCards inputs={moreRests} />}
      {moreDogParks && <ResultsCards inputs={moreDogParks} />}
      {morePubParks && <ResultsCards inputs={morePubParks} />}
      {morePetStores && <ResultsCards inputs={morePetStores} />}
      {moreVets && <ResultsCards inputs={moreVets} />}
      {moreHosps && <ResultsCards inputs={moreHosps} />}
    </>
  );
};

export default MoreResultsPage;

// Option 1: have a separate api fetch using 'open_now' parameter on Yelp API => replace the original results cards with new results
// Option 2: filter the original results with an "open_now" filter
