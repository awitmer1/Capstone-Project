// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import "./ResultsPage.css";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle";

// Utility Imports
import SearchContext from "../../context/SearchContext";
import CategoryContext from "../../context/CategoryContext";

const ResultsPage = () => {
  // State Variables
  const [initRests, setInitRests] = useState([]);
  const [initDogParks, setInitDogParks] = useState([]);
  const [initPubParks, setInitPubParks] = useState([]);
  const [initPetStores, setInitPetStores] = useState([]);
  const [initVets, setInitVets] = useState([]);
  const [initHosps, setInitHosps] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([
    "Restaurants & Bars",
    "Dog Parks",
    "Public Parks",
    "Pet Stores",
    "Veterenarians",
    "Pet Hospitals",
  ]);

  // Context Variables
  const { search } = useContext(SearchContext);
  const { setCategory } = useContext(CategoryContext);

  // Initial search functions for each category which run on page load (3 results max)
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

  // Handles checkboxes in sidebar - add / remove from state
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  //Conditional render function to show only selected categories in sidebar
  function renderCategory(selectedCategory, categoryName, inputs) {
    if (selectedOptions.includes(selectedCategory)) {
      return (
        <div className={categoryName}>
          <div className='header-more-results'>
            <h3>{selectedCategory}</h3>
            <Link
              to={`/results/more`}
              onClick={() => setCategory(`${categoryName}`)}>
              <p>Show More</p>
            </Link>
          </div>

          <ResultsCards inputs={inputs} />
        </div>
      );
    } else {
      return null;
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
    <div className='results-page-container'>
      <SidebarToggle
        handleCheckboxChange={handleCheckboxChange}
        selectedOptions={selectedOptions}
      />

      <div className='results-main-display'>
        <div className='back-to-main'>
          <Link to={`/`}>
            <p>Back to Search Page</p>
          </Link>
        </div>
        <p className='results-for'>Results for: {search}</p>
        {renderCategory("Restaurants & Bars", "restaurants", initRests)}
        {renderCategory("Dog Parks", "dog-parks", initDogParks)}
        {renderCategory("Public Parks", "pub-parks", initPubParks)}
        {renderCategory("Pet Stores", "pet-stores", initPetStores)}
        {renderCategory("Veterenarians", "vets", initVets)}
        {renderCategory("Pet Hospitals", "hospitals", initHosps)}
      </div>
    </div>
  );
};

export default ResultsPage;
