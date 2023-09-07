import React from "react";
import "./CommentPost.css";
import CommentForm from "../../utils/CommentForm";

const CommentPost = () => {
  const { formValues, handleChange, handleSubmit } = CommentForm();

  return (
    <div>
      <form className='comment-form' onSubmit={handleSubmit}>
        <label>Leave a Comment</label>
        <input
          className='comment-text'
          type='text'
          name='comment_text'
          onChange={handleChange}
          value={formValues.comment_text}
        />

        <button className='comment-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentPost;
