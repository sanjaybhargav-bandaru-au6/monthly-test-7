import { axiosInstance } from "../../utils";
const LOGIN_USER = payload => async dispatch => {
  try {
    const { data } = await axiosInstance.post("/login", {
      useremail: payload.state.email,
      password: payload.state.password
    });
    console.log(data);

    dispatch({
      type: "LOGIN_USER",
      payload: {
        userName: data.msg,
        token: data.token.token,
        posts: data.token.posts,
        favourites: data.token.favourites
      }
    });
    localStorage.setItem("token", JSON.stringify(data.token));
    payload.push("/timeline");
  } catch (error) {
    console.log(error);
  }
};
const REGISTER_USER = payload => async dispatch => {
  try {
    console.log("first");
    const { data } = await axiosInstance.post("/register", {
      useremail: payload.state.email,
      username: payload.state.userName,
      password: payload.state.password
    });
    console.log(data);
    payload.push("/login");
  } catch (error) {
    console.log("three");
    console.log(error);
  }
};
const ADD_TO_FAVOURITES = () => async dispatch => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const SET_MY_POSTS = () => async dispatch => {
  try {
    const { data } = await axiosInstance("");
    return dispatch({ type: "SET_MY_POSTS", paylaod: data });
  } catch (error) {
    console.log(error);
  }
};

const SET_FAVOURITES = () => async dispatch => {
  try {
    const { data } = await axiosInstance("");
    return dispatch({ type: "SET_FAVOURITES", paylaod: data });
  } catch (error) {
    console.log(error);
  }
};

const UPLOAD_POST = payload => async dispatch => {
  try {
    let formData = new FormData();
    formData.append("image", payload.image);
    formData.append("imagetitle", payload.title);
    formData.append("description", payload.description);
    formData.append("privacystatus", payload.isPublic);

    const res = await fetch(
      "https://mighty-reaches-93229.herokuapp.com/addData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: formData
      }
    );
    const resJson = await res.json();
    console.log(resJson);
  } catch (error) {
    console.log(error);
  }
};

const LOGOUT = () => ({ type: "LOGOUT" });
export {
  LOGIN_USER,
  REGISTER_USER,
  SET_MY_POSTS,
  SET_FAVOURITES,
  ADD_TO_FAVOURITES,
  UPLOAD_POST,
  LOGOUT
};
