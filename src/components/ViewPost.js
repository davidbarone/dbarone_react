import React from "react";

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

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

  render() {
    return (
      <div ref={el => (this.div = el)}>
        <h2>{this.props.post.title}</h2>
        <div style={{ color: "#999", fontSize: "0.8em" }}>
          By {this.props.post.updatedBy} on {this.props.post.updatedDt}
          <span>
            <button
              onClick={() => {
                alert("test");
              }}
            >
              Edit
            </button>
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
