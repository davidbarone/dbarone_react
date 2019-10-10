import React from "react";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.post);

    this.titleField = React.createRef();

    this.teaserField = React.createRef();
    this.contentField = React.createRef();
    this.contentTypeField = React.createRef();
    this.statusField = React.createRef();

    this.headField = React.createRef();
    this.codeField = React.createRef();
    this.styleField = React.createRef();

    this.parentIdField = React.createRef();
  }

  handleViewPost = event => {
    this.props.setMode("VIEW");
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <legend>Edit Post</legend>

            <label>Title:</label>
            <input
              className="full-width"
              type="text"
              ref={this.titleField}
              defaultValue={this.props.post.title}
            ></input>

            <label>Teaser:</label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.teaserField}
              defaultValue={this.props.post.teaser}
            ></textarea>

            <label>Content:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.contentField}
              defaultValue={this.props.post.content}
            ></textarea>

            <label>Content Type:</label>
            <select
              ref={this.contentTypeField}
              defaultValue={this.props.post.contentType}
            >
              <option>HTML</option>
              <option>MARKDOWN</option>
            </select>

            <label>Status:</label>
            <select
              ref={this.statusField}
              defaultValue={this.props.post.status}
            >
              <option>Published</option>
              <option>Draft</option>
            </select>

            <label>Head:</label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.headField}
              defaultValue={this.props.post.head}
            ></textarea>

            <label>Code:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.codeField}
              defaultValue={this.props.post.code}
            ></textarea>

            <label>Style:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.styleField}
              defaultValue={this.props.post.style}
            ></textarea>

            <label>Parent ID:</label>
            <input
              type="text"
              ref={this.parentIdField}
              defaultValue={this.props.post.parentId}
            ></input>
          </fieldset>
        </form>
        XXXX{this.teaserField.value}XXX
        <button onClick={this.handleViewPost}>Cancel</button>
      </>
    );
  }
}

export default EditPost;
