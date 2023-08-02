// General Imports
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { KEY } from "../../localKey";

// Component Imports
import ResultsCards from "../../components/ResultsCards/ResultsCards";

// Utility Imports
import SearchContext from "../../context/SearchContext";

const MoreResultsPage = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [moreRests, setMoreRests] = useState([]);
  const [moreDogParks, setMoreDogParks] = useState([]);
  const [morePubParks, setMorePubParks] = useState([]);
  const [morePetStores, setMorePetStores] = useState([]);
  const [moreVets, setMoreVets] = useState([]);
  const [moreHosps, setMoreHosps] = useState([]);




};

export default MoreResultsPage;