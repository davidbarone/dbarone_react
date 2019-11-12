import React, { useState, useEffect } from "react";
import moment from "moment";
import marked from "marked";

const PostTeaser = ({ id }) => {
  const [post, setPost] = useState(null);
  const [hasError, setErrors] = useState(false);

  const teaser = post => {
    if (!post.teaser) {
      return undefined;
    }

    return marked(post.teaser).replace(
      /https:\/\/api.dbarone.com/g,
      process.env.REACT_APP_API_ROOT
    );
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_ROOT}/posts/${id}`);
      const post = await res.json();
      setPost(post);
    };

    fetchPost();
  }, [id]);

  return post ? (
    <>
      <h2>
        <a href={"/posts/" + post.id}>{post.title}</a>
      </h2>
      <div style={{ color: "#999", fontSize: "0.8em" }}>
        By {post.updated_by} on {moment(post.published_dt).format("LL")}
      </div>
      <div
        style={{ marginTop: "6px" }}
        dangerouslySetInnerHTML={{ __html: teaser(post) }}
      ></div>

      <hr />
    </>
  ) : (
    <div />
  );
};

export default PostTeaser;
