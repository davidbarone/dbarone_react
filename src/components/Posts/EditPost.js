import React from "react";
import PostForm from "./PostForm";
import AuthService from "../../services/AuthService";
import { Redirect } from "react-router-dom";

class EditPost extends React.Component {
  handleCancel = event => {
    this.props.setMode("VIEW");
  };
  handleSave = async (post, e) => {
    const token = AuthService.getToken();
    // Save post
    fetch(`${process.env.REACT_APP_API_ROOT}/posts/${post.id}`, {
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

    return AuthService.getUserRole() === "admin" ? (
      <div style={{ padding: "0% 10%" }}>
        <PostForm post={post} onSave={this.handleSave} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default EditPost;
