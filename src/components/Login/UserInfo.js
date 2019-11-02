import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      user: AuthService.getUser()
    };

    window.addEventListener(
      "localStorageChanged",
      this.storageHandlerEvent,
      false
    );
  }

  storageHandlerEvent = event => {
    this.setState({ user: AuthService.getUser() });
  };

  render() {
    return (
      <div style={{ fontSize: "Small" }}>
        {this.state.user && (
          <>
            <span style={{ height: "60px", lineHeight: "60px", float: "left" }}>
              Welcome {this.state.user.name}!
            </span>
            <Link to="/logout">
              <button style={{ border: "none", background: "none" }}>
                Logout
              </button>
            </Link>
          </>
        )}
        {!this.state.user && (
          <Link to="/login">
            <button style={{ border: "none", background: "none" }}>
              Login
            </button>
          </Link>
        )}
      </div>
    );
  }
}

export default UserInfo;
