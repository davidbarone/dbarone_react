import React from "react";
import moment from "moment";
import marked from "marked";

class ViewPost extends React.Component {
  loadScriptSync(script) {
    return new Promise((resolve, reject) => {
      script.onload = function() {
        resolve({ script });
      };

      document.head.appendChild(script);
    });
  }

  async componentDidMount() {
    // Add inline style if set
    if (this.props.post.style) {
      const style = document.createElement("style");
      style.innerText = this.props.post.style;
      document.head.appendChild(style);
    }

    // Add head if any
    // All head contents must be nodes with src attributes.
    if (this.props.post.head) {
      const head = this.props.post.head.replace(
        /https:\/\/api.dbarone.com/g,
        process.env.REACT_APP_API_ROOT
      );
      // Have to convert head string to node
      var div = document.createElement("div");
      div.innerHTML = head;

      for (let i = 0; i < div.childNodes.length; i++) {
        const child = div.childNodes[i];

        if (child && child.nodeName === "SCRIPT" && child.src !== "") {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.src = child.src;
          s.async = false;
          //document.head.appendChild(s);
          await this.loadScriptSync(s);
        } else {
          eval(child.innerHTML);
        }
      }
      // Change this to div.childNodes to support multiple top-level nodes
      div.childNodes.forEach(child => {});
    }

    // Add code if any
    // Wrap this in inline <script> block.
    if (this.props.post.code) {
      const code = this.props.post.code.replace(
        /https:\/\/api.dbarone.com/g,
        process.env.REACT_APP_API_ROOT
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = false;

      try {
        // most browsers
        script.appendChild(document.createTextNode(code));
        document.head.appendChild(script);
      } catch (e) {
        // option (b) for other browsers
        script.text = code;
        document.head.appendChild(script);
      }
    }
  }

  handleEditPost = event => {
    this.props.setMode("EDIT");
  };

  content() {
    if (!this.props.post.content) {
      return undefined;
    }
    if (this.props.post.post_type === "MARKDOWN") {
      return marked(this.props.post.content).replace(
        /https:\/\/api.dbarone.com/g,
        process.env.REACT_APP_API_ROOT
      );
    } else {
      return this.props.post.content.replace(
        /https:\/\/api.dbarone.com/g,
        process.env.REACT_APP_API_ROOT
      );
    }
  }

  render() {
    const { post, setMode } = this.props;
    this.componentDidMount();
    return (
      <div ref={el => (this.div = el)}>
        <h2>{post.title}</h2>
        <div style={{ color: "#999", fontSize: "0.8em" }}>
          By {post.updated_by} on {moment(post.published_dt).format("LLLL")}
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
