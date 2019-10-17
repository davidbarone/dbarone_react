import React from "react";

class EditPost extends React.Component {
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
    const { post, setMode } = this.props;

    return (
      <>
        <form>
          <fieldset>
            <legend>Edit Post</legend>

            <button onClick={this.handleCancelEdit}>Save</button>
            <button onClick={this.handleSaveEdit}>Cancel</button>

            <label>Title:</label>
            <input
              className="full-width"
              type="text"
              ref={this.titleField}
              defaultValue={post.title}
            ></input>

            <label>Teaser:</label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.teaserField}
              defaultValue={post.teaser}
            ></textarea>

            <label>Content:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.contentField}
              defaultValue={post.content}
            ></textarea>

            <label>Post Type:</label>
            <select ref={this.postTypeField} defaultValue={post.posttype}>
              <option>HTML</option>
              <option>MARKDOWN</option>
            </select>

            <label>Head:</label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.headField}
              defaultValue={post.head}
            ></textarea>

            <label>Code:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.codeField}
              defaultValue={post.code}
            ></textarea>

            <label>Style:</label>
            <textarea
              className="full-width"
              rows="8"
              ref={this.styleField}
              defaultValue={post.style}
            ></textarea>

            <label>Parent ID:</label>
            <input
              type="text"
              ref={this.parentIdField}
              defaultValue={post.parentid}
            ></input>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EditPost;
