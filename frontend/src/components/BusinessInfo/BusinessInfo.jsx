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
import { IconContext } from "react-icons";
import { BsYelp } from "react-icons/bs";

const BusinessInfo = ({ info }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className='business-info-container'>
      <div className='business-text'>
        <Link to={`/results`}>
          <p>Back to Search Results</p>
        </Link>
        <div className='business-details'>
          <h3 className='business-title'>{info.name}</h3>
          <p>{info.display_phone}</p>
          <p>{info.categories[0].title}</p>
          <p>{`${info.location.display_address[0]} `}</p>
          <p>{`${info.location.display_address[1]} `}</p>
          {info.location.display_address[2] && (
            <p>{`${info.location.display_address[2]} `}</p>
          )}
          <p>
            <StarRating businessRating={info.rating} />
            based on {`${info.review_count}`} reviews
          </p>

          <button className='yelp-btn'>
            <a href={`${info.url}`}>
              Link to Yelp Page
              <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                <BsYelp />
              </IconContext.Provider>
            </a>
          </button>
        </div>

        {user ? (
          <CommentPost id={info.id} />
        ) : (
          <p>Must be logged in to comment and save for later!</p>
        )}

        <CommentDisplay id={info.id} />
      </div>
      <div className='business-imgs'>
        <img alt='business provided photo' src={`${info.photos[0]}`}></img>
        <img alt='business provided photo' src={`${info.photos[1]}`}></img>
        <img alt='business provided photo' src={`${info.photos[2]}`}></img>
      </div>
    </div>
  );
};

export default BusinessInfo;
