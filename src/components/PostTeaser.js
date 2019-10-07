import React, { useState, useEffect } from "react";

const PostTeaser = props => {
  const [post, setPost] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${props.id}`);
      const post = await res.json();
      setPost(post);
    };

    fetchPost();
  }, [props.id]);

  return (
    <>
      <h2>{post.title}</h2>
      <div style={{ color: "#999", fontSize: "0.8em" }}>
        By {post.updatedBy} on {post.updatedDt}
      </div>
      <div style={{ marginTop: "6px" }}>{post.teaser}</div>
      <a href={"/posts/" + post.id}>View post</a>
      <hr />
    </>
  );
};

export default PostTeaser;
