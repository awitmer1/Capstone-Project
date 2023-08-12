// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle";

// Utility Imports
import SearchContext from "../../context/SearchContext";
import CategoryContext from "../../context/CategoryContext";

const BusinessPage = () => {
  // State Variables
  const [bizData, setBizData] = useState([]);

  // Context Variables
  const { search, setSearch } = useContext(SearchContext);
  const { category, setCategory } = useContext(CategoryContext);
  const { id } = useParams();

  async function getBusinessInfo(id) {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${KEY}`,
            accept: `application/json`,
          },
        }
      );
      console.log("Business Search Result");
      console.log(response.data);
      setBizData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBusinessInfo(id);
  }, []);

  return (
    <div className='business-main'>
      <div className='back-to-results'>
        <Link to={`/results`}>
          <p>Back</p>
        </Link>
      </div>
      <div>
        <h3>{bizData.name}</h3>
        <p>{bizData.display_phone}</p>
        <p>{bizData.categories.title}</p>
        <p>Description</p>
        <p>Hours</p>
        <p>Location</p>
        <a href={`${bizData.url}`}>Link to Yelp Page: </a>
      </div>
    </div>
  );
};

export default BusinessPage;
