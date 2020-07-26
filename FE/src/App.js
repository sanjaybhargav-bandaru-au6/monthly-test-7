import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Timeline from "./pages/Timeline";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadPost from "./pages/UploadPost";
import Favourites from "./pages/Favourites";
import MyPosts from "./pages/MyPosts";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/upload-post" component={UploadPost} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/my-posts" component={MyPosts} />
        <Redirect to="/timeline" />
      </Switch>
      <Switch />
    </div>
  );
}

export default App;
