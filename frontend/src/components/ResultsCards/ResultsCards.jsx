import React from "react";
import { Link } from "react-router-dom";
import "./ResultsCards.css";

const ResultsCards = ({ inputs }) => {
  return (
    <div className='business-card-main'>
      {/* {console.log("array check for mapping")}
        {console.log(inputs)} */}
      {inputs ? (
        inputs &&
        inputs.map((item) => {
          return (
            <Link to={`/business/${item.id}`}>
              <div key={item.id} className='card'>
                <div className='card-pic'>
                  <img src={`${item.image_url}`} width={"125"} height={"100"} />
                </div>
                <div className='card-text'>
                  <p className='bus-name'>{item.name}</p>
                  <p className='bus-category' style={{ color: "grey" }}>
                    {item.categories[0].title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>No results available</p>
      )}
    </div>
  );
};

export default ResultsCards;
