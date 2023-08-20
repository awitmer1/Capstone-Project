// General Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import CommentContext from "../../hooks/CommentContext";
import { useContext } from "react";
import "./BusinessPage.css";

// Component Imports
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";

const BusinessPage = () => {
  // State Variables
  const [bizData, setBizData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Context Variables
  const { id } = useParams();
  const { comments, setComments } = useContext(CommentContext);

  // API Get function for single Yelp business based off of Yelp id
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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // Get comments from Django backend using Yelp id
  async function getAllComments() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${id}`
    );
    console.log("User comments");
    console.log(response.data);
    setComments(response.data);
  }

  // Tests for object/data tracking
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
    getAllComments(comments);
  }, []);

  return (
    <div className='business-main'>
      {loading ? <p>Loading...</p> : bizData && <BusinessInfo info={bizData} />}
    </div>
  );
};

export default BusinessPage;
