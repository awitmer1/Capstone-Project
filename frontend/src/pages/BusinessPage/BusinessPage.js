// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
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
  // Context Variables
  const { search, setSearch } = useContext(SearchContext);
  const { category, setCategory } = useContext(CategoryContext);

  return (
    <div>
      <h3>Business Name</h3>
      <p>Category</p>
      <p>Description</p>
      <p>Hours</p>
      <p>Location</p>
      <p>Phone</p>
    </div>
  );
};

export default BusinessPage;
