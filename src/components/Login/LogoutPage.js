import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

const LogoutPage = () => {
  useEffect(() => AuthService.logout());
  return (
    <>
      <h1>Logout</h1>
      <div>
        You have successfully logged out of this site. Click{" "}
        <Link to="/">Here</Link> to go back to the home page.
      </div>
    </>
  );
};

export default LogoutPage;
