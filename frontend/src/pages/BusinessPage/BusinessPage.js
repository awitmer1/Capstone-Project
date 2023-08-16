// General Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

// Component Imports
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";

const BusinessPage = () => {
  // State Variables
  const [bizData, setBizData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Context Variables
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
      setLoading(false);
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
      {loading ? <p>Loading...</p> : bizData && <BusinessInfo info={bizData} />}
    </div>
  );
};

export default BusinessPage;
