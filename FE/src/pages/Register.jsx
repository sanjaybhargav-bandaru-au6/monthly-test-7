import React, { useState } from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import { REGISTER_USER } from "../redux/actionCreators/userActionCreators";
function Register(props) {
  const {
    REGISTER_USER,
    history: { push }
  } = props;
  const [state, setState] = useState({ userName: "", email: "", password: "" });
  return (
    <div className="Register col-md-6 mx-auto mt-5 ">
      <h1 className="text-center">Register</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(state);
          if (
            state.userName === "" ||
            state.email === "" ||
            state.password === ""
          )
            return;
          REGISTER_USER({ state, push });
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputUser">User Name</label>
          <input
            onChange={e => setState({ ...state, userName: e.target.value })}
            type="text"
            className="form-control"
            id="exampleInputUser"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={e => setState({ ...state, email: e.target.value })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={e => setState({ ...state, password: e.target.value })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            if (state.email === "" || state.password === "") return;
            REGISTER_USER(state);
          }}
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { REGISTER_USER }
)(Register);
