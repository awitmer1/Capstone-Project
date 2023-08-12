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
      // console.log("Business Search Result");
      // console.log(response.data);
      setBizData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function runTests(data) {
    console.log(data);
    console.log(data.id);
    console.log(data.categories[0].title);
    console.log(data.location);
    console.log(data.location.display_address);
    console.log(
      `${data.location.display_address[0]} ` +
        `${data.location.display_address[1]}`
    );
    return;
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
        {runTests(bizData)}
        <h3>{bizData.name}</h3>
        <p>{bizData.display_phone}</p>
        <p>{bizData.categories[0].title}</p>
        <p>Hours</p>
        <p>{`${bizData.location.display_address[0]} `}</p>
        <p>{`${bizData.location.display_address[1]} `}</p>
        <a href={`${bizData.url}`}>Link to Yelp Page</a>
        <img src={`${bizData.photos[0]}`}></img>
        <img src={`${bizData.photos[1]}`}></img>
        <img src={`${bizData.photos[2]}`}></img>
      </div>
    </div>
  );
};

export default BusinessPage;
