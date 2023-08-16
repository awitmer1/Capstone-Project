import React, { useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CommentContext from "../hooks/CommentContext";

const CommentForm = (callback) => {
  const [formValues, setFormValues] = useState({
    yelp_id: "",
    text: "",
  });
  const [user, token] = useAuth();
  const { setComments } = useContext(CommentContext);
  const { id } = useParams();

  // const refresh = () => window.location.reload(true);

  async function updateComments() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${id}`
    );
    console.log(response.data);
    setComments(response.data);
  }

  const handleChange = (event) => {
    event.persist();

    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
      yelp_id: id,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //
    try {
      axios
        .post(
          `http://127.0.0.1:8000/api/comments/post/${id}`,
          {
            yelp_id: `${id}`,
            text: formValues.comment,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          console.log(response.status, response.data.token);

          updateComments(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return { formValues, handleChange, handleSubmit };
};

export default CommentForm;
