import React from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const { formValues, handleChange, handleSubmit, handleClick } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        onChange={handleChange}
        value={formValues.search}
        placeholder="City, State"
        required={true}
      />

      <Link to={"/results"}><button type="submit" onClick={handleClick}>Search</button></Link>
    </form>
  );
};

export default SearchForm;
