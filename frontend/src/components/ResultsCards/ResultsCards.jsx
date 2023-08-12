import React from "react";
import { Link } from "react-router-dom";

const ResultsCards = ({ inputs }) => {
  return (
    <>
      <div className='business-card-main'>
        {/* {console.log("array check for mapping")}
        {console.log(inputs)} */}
        {inputs ? (
          inputs &&
          inputs.map((item) => {
            return (
              <Link to={`/business/${item.id}`}>
                <div key={item.id}>
                  <p className='bus-name'>{item.name}</p>
                  <p className='bus-category' style={{ color: "grey" }}>
                    {item.categories[0].title}
                  </p>
                  <img src={`${item.image_url}`} width={"125"} height={"100"} />
                </div>
              </Link>
            );
          })
        ) : (
          <p>No results available</p>
        )}
      </div>
    </>
  );
};

export default ResultsCards;
