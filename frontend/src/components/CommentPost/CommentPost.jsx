import React from "react";
import "./CommentPost.css";
import CommentForm from "../../utils/CommentForm";

const CommentPost = () => {
  const { formValues, handleChange, handleSubmit } = CommentForm();

  return (
    <div>
      <form className='comment-form' onSubmit={handleSubmit}>
        <label>Leave a Comment</label>
        <textarea
          className='comment-post-text'
          type='textarea'
          rows='5'
          cols='50'
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
