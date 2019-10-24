import React from "react";
import PostForm from "./PostForm";

class EditPost extends React.Component {
  handleCancel = event => {
    this.props.setMode("VIEW");
  };
  handleSave = async (post, e) => {
    // Save post
    const res = await fetch(`http://localhost:5000/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" }
    });
    // Navigate to post
    window.location = `/posts/${post.id}`;
  };

  render() {
    const { post, setMode } = this.props;

    return <PostForm post={post} onSave={this.handleSave} />;
  }
}

export default EditPost;
