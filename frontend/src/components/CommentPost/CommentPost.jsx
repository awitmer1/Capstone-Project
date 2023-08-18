import React from "react";
import "./CommentPost.css";
import CommentForm from "../../utils/CommentForm";

const CommentPost = () => {
  const { formValues, handleChange, handleSubmit } = CommentForm();

  return (
    <div>
      <form className='comment-form' onSubmit={handleSubmit}>
        <label>Comment</label>
        <input
          type='text'
          name='comment'
          onChange={handleChange}
          value={formValues.comment}
        />

        <button className='comment-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentPost;