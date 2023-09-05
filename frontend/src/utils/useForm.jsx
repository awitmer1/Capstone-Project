import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";

const useForm = (callback) => {
  const { setSearch } = useContext(SearchContext);

  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    event.persist();

    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    setSearch(formValues.search);
    console.log(`Search results: ${formValues.search}`);
  };

  return { formValues, handleChange, handleSubmit, handleClick };
};

export default useForm;
