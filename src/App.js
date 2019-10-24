import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListPosts from "./components/Posts/ListPosts";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import AdminPage from "./components/AdminPage";
import AccountManagement from "./components/AccountManagement";
import SinglePost from "./components/Posts/SinglePost";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGithub, faLinkedin, faEnvelopeSquare);

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button style={{ border: "none", background: "none" }}>Home</button>
      </Link>
      <Link to="/posts">
        <button style={{ border: "none", background: "none" }}>Posts</button>
      </Link>
      <Link to="/search">
        <button style={{ border: "none", background: "none" }}>Search</button>
      </Link>
      <Link to="/admin">
        <button style={{ border: "none", background: "none" }}>Admin</button>
      </Link>
      <Link to="/contact">
        <button style={{ border: "none", background: "none" }}>Signup</button>
      </Link>
    </div>
  );
};

function ViewPostX({ match }) {
  return (
    <>
      <SinglePost id={match.params.id} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <MainMenu />
        </header>
        <main style={{ padding: "0px" }}>
          <div
            style={{
              border: "solid #ccc 1px",
              borderRadius: "12px",
              background: "white",
              padding: "8px"
            }}
          >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/posts" component={ListPosts} />
            <Route path="/posts/:id" component={ViewPostX} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/account" component={AccountManagement} />
            <Route exact path="/admin" component={AdminPage} />
          </div>
        </main>
        <footer>XXX</footer>
      </div>
    </Router>
  );
}

export default App;
