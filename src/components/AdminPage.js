import React, { useState, useEffect } from "react";
import CreatePost from "./Posts/CreatePost";
import AuthService from "../services/AuthService";
import { Redirect } from "react-router-dom";

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
      <button class="button" onClick={handleCreatePost}>
        Create
      </button>
      <span>Create new post.</span>
    </>
  );
  const addPost = mode === "ADD_POST" && <CreatePost />;

  return AuthService.getUserRole() === "admin" ? (
    <>
      <h1>Admin</h1>
      <hr></hr>
      <h2>Posts</h2>
      {addPostButton}
      {addPost}
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default AdminPage;
