import React from "react";
import moment from "moment";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.post.id;
    this.titleField = React.createRef();
    this.teaserField = React.createRef();
    this.contentField = React.createRef();
    this.postTypeField = React.createRef();
    this.headField = React.createRef();
    this.codeField = React.createRef();
    this.styleField = React.createRef();
    this.parentIdField = React.createRef();
    this.publishedDtField = React.createRef();
    this.deletedField = React.createRef();
  }

  getPostObject = () => {
    return {
      id: this.id,
      title: this.titleField.current.value,
      teaser: this.teaserField.current.value,
      content: this.contentField.current.value,
      post_type: this.postTypeField.current.value,
      head: this.headField.current.value,
      code: this.codeField.current.value,
      style: this.styleField.current.value,
      parent_id: parseInt(this.parentIdField.current.value) || undefined,
      published_dt: new Date(this.publishedDtField.current.value) || moment(),
      deleted: false // this.deletedField.current.value || false
    };
  };

  handleCancelEdit = event => {
    this.props.setMode("VIEW");
  };

  handleSave = e => {
    const post = this.getPostObject();
    this.props.onSave(post, e);
    e.preventDefault();
  };

  render() {
    const { post, onSave, onCancel } = this.props || {};

    return (
      <>
        <h1>Edit Post</h1>
        <form>
          <fieldset>
            <legend>Edit / Create Post</legend>
            <button class="button primary" onClick={this.handleSave}>
              Save
            </button>
            <button class="button" onClick={onCancel}>
              Cancel
            </button>
            <label>Title:</label>
            <input
              className="full-width"
              type="text"
              ref={this.titleField}
              defaultValue={post.title}
            ></input>
            <label>Teaser (This section ONLY supports MARKDOWN):</label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.teaserField}
              defaultValue={post.teaser}
            ></textarea>
            <label>
              Content (Note no executable code here. Put scripts in head or
              code):
            </label>
            <textarea
              className="full-width"
              rows="20"
              ref={this.contentField}
              defaultValue={post.content}
            ></textarea>
            <label>Post Type:</label>
            <select ref={this.postTypeField} defaultValue={post.post_type}>
              <option>HTML</option>
              <option>MARKDOWN</option>
            </select>
            <label>
              Head (Script links to external files and other CSS links etc):
            </label>
            <textarea
              className="full-width"
              rows="3"
              ref={this.headField}
              defaultValue={post.head}
            ></textarea>
            <label>
              Code (Inline JS without the script tag - just the JS code):
            </label>
            <textarea
              className="full-width"
              rows="20"
              ref={this.codeField}
              defaultValue={post.code}
              placeholder="const hello_world = 'hello world!';
alert(hello_world);"
            ></textarea>
            <label>Style:</label>
            <textarea
              className="full-width"
              rows="10"
              ref={this.styleField}
              defaultValue={post.style}
            ></textarea>
            <label>Published Date:</label>
            <input
              type="date"
              ref={this.publishedDtField}
              defaultValue={new Date(post.published_dt || moment())
                .toISOString()
                .substr(0, 10)}
            ></input>
            <label>Parent ID:</label>
            <input
              type="text"
              ref={this.parentIdField}
              defaultValue={post.parent_id}
            ></input>
            <label>Deleted:</label>
            <input
              type="checkbox"
              ref={this.deletedField}
              defaultValue={post.deleted}
            ></input>
          </fieldset>
        </form>
      </>
    );
  }
}

export default PostForm;
