import React, { useState } from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const { handleChange, handleSubmit, handleClick } = useForm();
  const { search } = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        onChange={handleChange}
        value={search}
        placeholder='City, State'
        required={true}
      />

      <Link to={"/results"}>
        <button type='submit' onClick={handleClick}>
          Search
        </button>
      </Link>
    </form>
  );
};

export default SearchForm;
