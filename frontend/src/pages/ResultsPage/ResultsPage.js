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

const ResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [initRests, setInitRests] = useState([]);
  const [initDogParks, setInitDogParks] = useState([]);
  const [initPubParks, setInitPubParks] = useState([]);
  const [initPetStores, setInitPetStores] = useState([]);
  const [initVets, setInitVets] = useState([]);
  const [initHosps, setInitHosps] = useState([]);

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

  async function fetchDogParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&limit=3&sort_by=best_match&term=dog_parks";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitDogParks(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPubParks(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&limit=3&sort_by=best_match&term=parks";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitPubParks(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPetStores(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&limit=3&sort_by=best_match&term=pet%20store";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitPetStores(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchVets(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&limit=3&sort_by=best_match&term=Vet";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitVets(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchHosps(search) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${search}&limit=3&sort_by=best_match&term=emergency%20pet";`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      // console.log("User search results");
      // console.log(response.data.businesses);
      setInitHosps(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRestaurants(search);
    fetchDogParks(search);
    fetchPubParks(search);
    fetchPetStores(search);
    fetchVets(search);
    fetchHosps(search);
  }, []);

  return (
    <>
      <div className="back-to-main">
        <Link to={`/`}>
          <p>Back</p>
        </Link>
      </div>
      <p>Results for: {search}</p>
      <div className="restaurants-main">
        <h3>Restaurants & Bars</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initRests} />
      </div>
      <div className="dog-parks-main">
        <h3>Dog Parks</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initDogParks} />
      </div>
      <div className="public-parks-main">
        <h3>Public Parks</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initPubParks} />
      </div>
      <div className="pet-stores-main">
        <h3>Pet Stores</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initPetStores} />
      </div>
      <div className="vets-main">
        <h3>Veterenarians</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initVets} />
      </div>
      <div className="hospitals-main">
        <h3>Pet Hospitals</h3>
        <Link to={`/results/more`}>
          <p>See More Results</p>
        </Link>
        <ResultsCards inputs={initHosps} />
      </div>
    </>
  );
};

export default ResultsPage;
