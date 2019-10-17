import React, { useState, useEffect } from "react";
import PostTeaser from "./PostTeaser";

const ListPosts = props => {
  const [posts, setPosts] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchPosts() {
    const res = await fetch("http://localhost:5000/api/posts");
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
