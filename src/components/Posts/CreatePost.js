import React from "react";
import PostForm from "./PostForm";
import AuthService from "../../services/AuthService";

class CreatePost extends React.Component {
  handleCancel = event => {
    this.props.setMode("VIEW");
  };
  handleSave = async (post, event) => {
    // Save post
    console.log(post);
    const res = await fetch(`${process.env.REACT_APP_API_ROOT}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthService.getToken()
      }
    });
    const newPost = await res.json();
    console.log(newPost);
    // Navigate to post
    window.location = `/posts/${newPost.id}`;
  };

  render() {
    return <PostForm post={{}} onSave={this.handleSave} />;
  }
}

export default CreatePost;
