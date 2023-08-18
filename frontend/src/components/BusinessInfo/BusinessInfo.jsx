// General Imports
import React from "react";
import "./BusinessInfo.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Component Imports
import CommentDisplay from "../CommentDisplay/CommentDisplay";
import CommentPost from "../CommentPost/CommentPost";
import StarRating from "../StarRating/StarRating";

// Utility Imports
import AuthContext from "../../context/AuthContext";

const BusinessInfo = ({ info }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className='business-info-container'>
      <div className='business-text'>
        <Link to={`/results`}>
          <p>Back</p>
        </Link>
        <h3>{info.name}</h3>
        <p>{info.display_phone}</p>
        <p>{info.categories[0].title}</p>
        <p>Hours</p>
        <p>{`${info.location.display_address[0]} `}</p>
        <p>{`${info.location.display_address[1]} `}</p>
        {info.location.display_address[2] && (
          <p>{`${info.location.display_address[2]} `}</p>
        )}
        <p>
          <StarRating businessRating={info.rating} />
          based on {`${info.review_count}`} reviews
        </p>
        <a href={`${info.url}`}>
          <button className='yelp-btn'>Link to Yelp Page</button>
        </a>

        {user ? (
          <CommentPost id={info.id} />
        ) : (
          <p>Must be logged in to comment!</p>
        )}

        <CommentDisplay id={info.id} />
      </div>
      <div className='business-imgs'>
        <img src={`${info.photos[0]}`}></img>
        <img src={`${info.photos[1]}`}></img>
        <img src={`${info.photos[2]}`}></img>
      </div>
    </div>
  );
};

export default BusinessInfo;
