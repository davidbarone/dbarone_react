import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.titleField = React.createRef();
    this.teaserField = React.createRef();
    this.contentField = React.createRef();
    this.postTypeField = React.createRef();
    this.headField = React.createRef();
    this.codeField = React.createRef();
    this.styleField = React.createRef();
    this.parentIdField = React.createRef();
    this.deletedField = React.createRef();
  }

  handleCancelEdit = event => {
    this.props.setMode("VIEW");
  };
  handleSaveEdit = event => {
    this.props.setMode("VIEW");
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <legend>Edit / Create Post</legend>

            <button onClick={this.handleCancelEdit}>Save</button>
            <button onClick={this.handleSaveEdit}>Cancel</button>

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

            <label>Post Type:</label>
            <select
              ref={this.postTypeField}
              defaultValue={this.props.post.posttype}
            >
              <option>HTML</option>
              <option>MARKDOWN</option>
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
              defaultValue={this.props.post.parentid}
            ></input>
          </fieldset>
        </form>
      </>
    );
  }
}

export default PostForm;
