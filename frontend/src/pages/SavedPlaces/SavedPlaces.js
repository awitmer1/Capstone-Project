// General Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import "./SavedPlaces.css";
import AuthContext from "../../context/AuthContext";

const SavedPlaces = () => {
  // State Variables
  const [saved, setSaved] = useState([]);

  // Context Variables
  const { user, token } = useContext(AuthContext);

  async function getSavedPlaces() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/saved_places/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: `application/json`,
          },
        }
      );
      console.log(response.data);
      setSaved(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserInfo() {
    console.log(user);
  }

  useEffect(() => {
    getUserInfo();
    getSavedPlaces();
  }, []);

  return (
    <div className='saved-places-main'>
      <div className='places-heading'>
        <h3>My Saved Places</h3>
      </div>
      <div className='places-map'>
        {saved.map((place) => {
          return (
            <div key={place.yelp_id} className='saved-card'>
              <a>{place.business_name}</a>
              <a>{place.category}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedPlaces;
