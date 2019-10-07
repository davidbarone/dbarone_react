import React from "react";

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  async componentDidMount() {
    var res = await fetch(`http://localhost:5000/api/posts/${this.props.id}`);
    var post = await res.json();
    this.setState({ post: post });

    // Add script if any
    const script = document.createElement("script");
    script.async = true;
    script.src = this.state.post.script;
    console.log(this.state.post.content);
    this.div.appendChild(script);
  }

  handleEdit = async event => {
    alert("here");
    window.location = `/`;
  };
  render() {
    return (
      <div ref={el => (this.div = el)}>
        <h2>{this.state.post.title}</h2>
        <div style={{ color: "#999", fontSize: "0.8em" }}>
          By {this.state.post.updatedBy} on {this.state.post.updatedDt}
          <span>
            <button onClick={this.handleEdit}>Edit</button>
          </span>
        </div>
        <div style={{ marginTop: "6px" }}>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.post.content }}
          ></div>
        </div>
        {/* script inserted here */}
      </div>
    );
  }
}

export default ViewPost;
