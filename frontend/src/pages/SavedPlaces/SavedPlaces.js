// General Imports
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import { useContext } from "react";
import "./SavedPlaces.css";
import AuthContext from "../../context/AuthContext";

// Component Imports

const SavedPlaces = () => {
  // State Variables
  const [saved, setSaved] = useState([]);

  // Context Variables
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);

  async function getSavedPlaces() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/saved_places/"
      );
      console.log(response.data);
      setSaved(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSavedPlaces();
  }, []);

  return (
    <div className='saved-places-main'>
      <p>Saved Places</p>
    </div>
  );
};

export default SavedPlaces;
