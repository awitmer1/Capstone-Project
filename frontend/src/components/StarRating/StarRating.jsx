import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";

const StarRating = ({ businessRating }) => {
  function GetStars(businessRating) {
    // Round to nearest half
    let rating = Math.round(businessRating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (let i = rating; i >= 1; i--) {
      output.push(<BsStarFill />);
    }

    // If there is a half a star, append it
    if (rating % 1 !== 0) {
      output.push(<BsStarHalf />);
    }

    // Fill the empty stars
    for (let i = 5 - rating; i >= 1; i--) {
      output.push(<BsStar />);
    }

    return output;
  }

  return (
    <IconContext.Provider value={{ color: "dodgerblue", size: "1.25em" }}>
      <span>{GetStars(businessRating)}</span>
    </IconContext.Provider>
  );
};

export default StarRating;
