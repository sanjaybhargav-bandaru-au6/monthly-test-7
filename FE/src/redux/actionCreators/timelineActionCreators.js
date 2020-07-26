import { axiosInstance } from "../../utils";

const SET_TIMELINE = () => async dispatch => {
  try {
    const { data } = await axiosInstance("/allPublicPosts");
    console.log("data", data);
    return dispatch({ type: "SET_TIMELINE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { SET_TIMELINE };
