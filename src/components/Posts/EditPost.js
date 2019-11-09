import React from "react";
import PostForm from "./PostForm";
import AuthService from "../../services/AuthService";

class EditPost extends React.Component {
  handleCancel = event => {
    this.props.setMode("VIEW");
  };
  handleSave = async (post, e) => {
    const token = AuthService.getToken();
    // Save post
    fetch(`https://api.dbarone.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json", Authorization: token }
    })
      .then(res => {
        // Navigate to post
        window.location = `/posts/${post.id}`;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { post, setMode } = this.props;

    return <PostForm post={post} onSave={this.handleSave} />;
  }
}

export default EditPost;
