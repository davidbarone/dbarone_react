import React from "react";

const EditPost = (post, toggleEditMode) => {
  return (
    <>
      <div>Edit Post</div>
      <button onClick={toggleEditMode}>Edit</button>
    </>
  );
};

export default EditPost;
