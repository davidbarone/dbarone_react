import React from "react";
import ViewPost from "./ViewPost";
import EditPost from "./EditPost";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      mode: "VIEW"
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROOT}/posts/${this.props.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ post: data });
      });
  }

  setMode = mode => {
    this.setState({ mode: mode });
  };

  render() {
    const { id } = this.props;
    // view or edit
    let postComponent = null;
    if (this.state.mode === "EDIT")
      postComponent = (
        <>
          <h1>Edit Post</h1>
          <EditPost post={this.state.post} setMode={this.setMode} />
        </>
      );
    else if (this.state.mode === "VIEW")
      postComponent = (
        <ViewPost post={this.state.post} setMode={this.setMode} />
      );

    return postComponent;
  }
}

export default SinglePost;
