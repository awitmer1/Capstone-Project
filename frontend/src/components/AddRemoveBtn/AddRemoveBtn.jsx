import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import "./AddRemoveBtn.css";

const AddRemoveBtn = ({ data, category }) => {
  // Context Variables
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);

  //   Axios delete request - remove selected business from saved places
  const deleteBtnDel = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/saved_places/${user.id}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: `application/json`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   Axios post request - add selected business to saved places
  const addBtnPost = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/saved_places/${user.id}`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: `application/json`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   Button toggle to handle delete request
  function deleteBtnHandle(id) {
    console.log(`Deleting Business ${id}...`);
    document.querySelector(`#del-btn`).textContent = "Removed!";
    deleteBtnDel(id);
  }

  //   Button toggle to handle post request
  function addBtnHandle() {
    console.log(`Adding Business ${id} to saved places`);
    document.querySelector(`#add-btn`).textContent = "Saved!";
    addBtnPost();
  }

  //   Post body data - passed into Axios
  let postData = {
    yelp_id: `${id}`,
    business_name: `${data.name}`,
    category: `${category}`,
  };

  return (
    <div className='add-remove-btns'>
      <button className='add-btn' id='add-btn' onClick={() => addBtnHandle()}>
        Save for later
      </button>
      <button
        className='del-btn'
        id='del-btn'
        onClick={() => deleteBtnHandle(id)}>
        Remove from saved
      </button>
    </div>
  );
};

export default AddRemoveBtn;
