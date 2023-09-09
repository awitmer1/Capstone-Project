// General Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import "./SavedPlaces.css";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const SavedPlaces = () => {
  const [saved, setSaved] = useState([]);
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
            <Link key={place.yelp_id} to={`/business/${place.yelp_id}`}>
              <div className='saved-card'>
                <p>{place.business_name}</p>
                <p>{place.category}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SavedPlaces;
