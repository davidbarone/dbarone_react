import React from "react";
import ViewPost from "./ViewPost";
import EditPost from "./EditPost";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, isEditMode: false };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/posts/${this.props.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ post: data });
      });
  }

  toggleEditMode() {
    alert("here");
    var a = this.isEditMode;
    this.setState({ isEditMode: !a });
  }

  render() {
    // view or edit
    let postComponent = null;
    if (this.state.isEditMode)
      postComponent = (
        <EditPost post={this.state.post} toggleEditMode={this.toggleEditMode} />
      );
    else
      postComponent = (
        <ViewPost post={this.state.post} toggleEditMode={this.toggleEditMode} />
      );

    return (
      <>
        XXX
        <div>{this.state.isEditMode === true ? "TRUE" : "FALSE"}</div>XXX
        {postComponent}
      </>
    );
  }
}

export default SinglePost;
