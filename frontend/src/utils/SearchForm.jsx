import React from "react";
import useForm from "./useForm";

const SearchForm = () => {
  const { formValues, handleChange, handleSubmit } = useForm();

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

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
