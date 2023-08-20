import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const AddRemoveBtn = ({ data, category }) => {
  // Context Variables
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);

  const deleteBtn = async () => {
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

  function deleteBtnHandle(id) {
    console.log(`Deleting Business ${id}...`);
    deleteBtn(id);
  }

  const addBtn = async (data, category) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/saved_places/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: `application/json`,
          },
          body: {
            yelp_id: `${id}`,
            business_name: `${data.name}`,
            category: `${category}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  function addBtnHandle() {
    console.log(`Adding Business ${id}...`);
    addBtn(id);
  }

  return (
    <>
      <button onClick={() => console.log(data, category)}>
        Get Business Data
      </button>
      <button onClick={() => addBtnHandle(data, category)}>Save</button>
      <button onClick={() => deleteBtnHandle(id)}>Remove</button>
    </>
  );
};

export default AddRemoveBtn;
