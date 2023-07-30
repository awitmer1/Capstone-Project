import React from 'react';
// import useForm from './useForm';

const SearchForm = () => {

    const {formValues, handleChange, handleSubmit} = useForm(register);

    function register() {
        alert(`Thanks for registering! Check your email ${formValues.email} for confirmation.`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' name='email' onChange={handleChange} value={formValues.email} required={true}/>
            
            <label>Password</label>
            <input type='password' name='password' onChange={handleChange} value={formValues.password} required={true}/>

            <button type='submit'>Register</button>            
        </form>
    );
}

export default SearchForm;
