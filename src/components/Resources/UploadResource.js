import React, { useState, useCallback } from "react";
import AuthService from "../../services/AuthService";

function ResourceUpload({ onAddResource }) {
  const onChangeHandler = useCallback(event => {
    input.current.innerText = event.target.files[0].name;
  });

  const onSubmitHandler = useCallback(async event => {
    try {
      const data = document.getElementById("file-upload").files[0];
      let formData = new FormData();

      formData.append("resourceFile", data);
      onAddResource(formData);
      event.preventDefault();
    } catch (err) {
      console.log(err);
    }
  });

  const input = React.createRef();

  return (
    <>
      <form>
        <h3>Upload File:</h3>
        <label htmlFor="file-upload" className="button">
          Select file:
        </label>
        <input
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          name="resourceFile"
          onChange={onChangeHandler}
        ></input>

        <input
          className="button primary"
          type="submit"
          onClick={onSubmitHandler}
        ></input>

        <div id="fileName" ref={input} disabled />
      </form>
    </>
  );
}

export default ResourceUpload;
