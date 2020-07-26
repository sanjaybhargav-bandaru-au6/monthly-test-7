import React, { useState } from "react";
import { connect } from "react-redux";
import { LOGIN_USER } from "../redux/actionCreators/userActionCreators";

function Login(props) {
  const {
    LOGIN_USER,
    history: { push }
  } = props;
  const [state, setState] = useState({ email: "", password: "" });
  return (
    <div className="Login col-md-6 mx-auto mt-5 ">
      <h1 className="text-center">Login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (state.email === "" || state.password === "") return;
          LOGIN_USER({ state, push });
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={e => setState({ ...state, email: e.target.value })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Emailid"
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { LOGIN_USER }
)(Login);
