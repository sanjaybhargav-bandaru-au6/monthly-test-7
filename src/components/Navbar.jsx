import React from "react";
import { connect } from "react-redux";
import { userState } from "../redux/mapStateToProps";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
  const {
    userState: {
      user: { userName }
    }
  } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            style={{
              borderRadius: "50%",
              backgroundColor: "white",
              marginRight: "10px"
            }}
            src="https://robohash.org/siddhida"
            height="40px"
            alt=""
          />
          Imgur
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {userName ? (
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {userName}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/upload-post">
                      Upload Post
                    </Link>
                    <Link className="dropdown-item" to="/my-posts">
                      My Posts
                    </Link>
                    <Link className="dropdown-item" to="/favourites">
                      Favourites
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      onClick={() => props.dispatch({ type: "LOGOUT" })}
                      className="dropdown-item"
                      to=""
                    >
                      Logout
                    </Link>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default connect(
  userState,
  null
)(Navbar);
