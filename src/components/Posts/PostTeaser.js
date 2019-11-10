import React, { useState, useEffect } from "react";
import moment from "moment";

const PostTeaser = ({ id }) => {
  const [post, setPost] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_ROOT}/posts/${id}`);
      const post = await res.json();
      setPost(post);
    };

    fetchPost();
  }, [id]);

  return (
    <>
      <h4>
        <a href={"/posts/" + post.id}>{post.title}</a>
      </h4>
      <div style={{ color: "#999", fontSize: "0.8em" }}>
        By {post.updatedby} on {moment(post.updatedDt).format("LLLL")}
      </div>
      <div style={{ marginTop: "6px" }}>{post.teaser}</div>
      <hr />
    </>
  );
};

export default PostTeaser;
