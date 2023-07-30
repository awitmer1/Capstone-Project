import React, { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';

const useForm = (callback) => {

    const { setSearch } = useContext(SearchContext);

    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {

        event.persist();

        setFormValues({...formValues, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) => {

        event.preventDefault ();

        setSearch(formValues.search)
    }

    return {formValues, handleChange, handleSubmit}
}

export default useForm;