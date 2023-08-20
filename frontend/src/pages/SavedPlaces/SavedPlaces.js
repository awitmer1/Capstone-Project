// General Imports
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import { useContext } from "react";
import "./SavedPlaces.css";

// Component Imports

const SavedPlaces = () => {
  // State Variables

  // Context Variables
  const { id } = useParams();

  return (
    <div className='saved-places-main'>
      <p>Saved Places</p>
    </div>
  );
};

export default SavedPlaces;
