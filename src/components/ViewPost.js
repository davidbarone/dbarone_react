import React from "react";
import moment from "moment";

class ViewPost extends React.Component {
  async componentDidMount() {
    // Add script if any
    if (this.props.post.script) {
      const script = document.createElement("script");
      script.async = true;
      script.src = this.props.post.script;
      this.div.appendChild(script);
    }
    // Add any includes if any
    if (this.props.post.head) {
      console.log(this.props.post.head);
    }
  }

  handleEditPost = event => {
    this.props.setMode("EDIT");
  };

  render() {
    return (
      <div ref={el => (this.div = el)}>
        <h2>{this.props.post.title}</h2>
        <div style={{ color: "#999", fontSize: "0.8em" }}>
          By {this.props.post.updatedBy} on{" "}
          {moment(this.props.post.updatedDt).format("LLLL")}
          <span>
            <button onClick={this.handleEditPost}>Edit</button>
          </span>
        </div>
        <div
          style={{ marginTop: "6px" }}
          dangerouslySetInnerHTML={{ __html: this.props.post.content }}
        ></div>
        {/* script inserted here */}
      </div>
    );
  }
}

export default ViewPost;
