import React, { useState, useEffect } from "react";
import PostTeaser from "./PostTeaser";
import AuthService from "../../services/AuthService";

const ListPosts = props => {
  const [posts, setPosts] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchPosts() {
    const res = await fetch(`${process.env.REACT_APP_API_ROOT}/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthService.getToken()}`
      }
    });
    console.log(res);
    res
      .json()
      .then(res => setPosts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map(p => (
        <PostTeaser key={p.id} id={p.id} />
      ))}
    </>
  );
};

export default ListPosts;
