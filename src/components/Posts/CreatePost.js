import React from "react";
import PostForm from "./PostForm";

class CreatePost extends React.Component {
  handleCancel = event => {
    this.props.setMode("VIEW");
  };
  handleSave = async (post, event) => {
    // Save post
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" }
    });
    const json = await res.json();
    this.props.setMode("VIEW");
  };

  render() {
    return <PostForm post={{}} onSave={this.handleSave} />;
  }
}

export default CreatePost;
