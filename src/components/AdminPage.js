import React, { useState, useEffect } from "react";
import CreatePost from "./Posts/CreatePost";

const AdminPage = props => {
  const [mode, setMode] = useState([]);

  const handleCreatePost = event => {
    setMode("ADD_POST");
  };

  const handleCancelNewPost = event => {
    setMode("");
  };

  const addPostButton = mode !== "ADD_POST" && (
    <>
      <button onClick={handleCreatePost}>Create</button>
      <span>Create new post.</span>
    </>
  );
  const addPost = mode === "ADD_POST" && <CreatePost />;

  return (
    <>
      <h1>Admin</h1>
      <hr></hr>
      <h2>Posts</h2>
      {addPostButton}
      {addPost}
    </>
  );
};

export default AdminPage;
