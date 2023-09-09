// General Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import CommentContext from "../../hooks/CommentContext";
import { useContext } from "react";
import "./BusinessPage.css";

// Component Imports
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";
import AddRemoveBtn from "../../components/AddRemoveBtn/AddRemoveBtn";

// Utility Imports
import AuthContext from "../../context/AuthContext";

const BusinessPage = () => {
  // State Variables
  const [bizData, setBizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [businessCategory, setBusinessCategory] = useState("");

  // Context Variables
  const { id } = useParams();
  const { user } = useContext(AuthContext);
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
      setBusinessCategory(response.data.categories[0].title);
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

  useEffect(() => {
    getBusinessInfo(id);
    getAllComments(comments);
  }, []);

  return (
    <div className='business-main'>
      {user ? (
        <AddRemoveBtn data={bizData} category={businessCategory} />
      ) : null}
      {loading ? <p>Loading...</p> : bizData && <BusinessInfo info={bizData} />}
    </div>
  );
};

export default BusinessPage;
