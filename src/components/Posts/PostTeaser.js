import React, { useState, useEffect } from "react";

const PostTeaser = ({ id }) => {
  const [post, setPost] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const post = await res.json();
      setPost(post);
    };

    fetchPost();
  }, [id]);

  return (
    <>
      <h2>
        <a href={"/posts/" + post.id}>{post.title}</a>
      </h2>
      <div style={{ color: "#999", fontSize: "0.8em" }}>
        By {post.updatedBy} on {post.updatedDt}
      </div>
      <div style={{ marginTop: "6px" }}>{post.teaser}</div>
      <hr />
    </>
  );
};

export default PostTeaser;
