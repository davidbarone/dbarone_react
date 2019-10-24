import React from "react";
import moment from "moment";
import marked from "marked";

class ViewPost extends React.Component {
  async componentDidMount() {
    // Add script if any
    console.log(this.props.post);
    if (this.props.post.code) {
      alert("xxx");
      const script = document.createElement("script");
      script.async = true;
      script.src = this.props.post.code;
      this.div.appendChild(script);
    }
    // Add any includes if any
    if (this.props.post.head) {
      document.head.appendChild(this.props.post.head);
    }
  }

  handleEditPost = event => {
    this.props.setMode("EDIT");
  };

  content() {
    if (this.props.post.posttype === "MARKDOWN") {
      return marked(this.props.post.content);
    } else {
      return this.props.post.content;
    }
  }

  render() {
    const { post, setMode } = this.props;
    this.componentDidMount();
    return (
      <div ref={el => (this.div = el)}>
        <h2>{post.title}</h2>
        <div style={{ color: "#999", fontSize: "0.8em" }}>
          By {post.updatedBy} on {moment(post.updatedDt).format("LLLL")}
          <span>
            <button onClick={this.handleEditPost}>Edit</button>
          </span>
        </div>
        <div
          style={{ marginTop: "6px" }}
          dangerouslySetInnerHTML={{ __html: this.content() }}
        ></div>
        {/* script inserted here */}
      </div>
    );
  }
}

export default ViewPost;
