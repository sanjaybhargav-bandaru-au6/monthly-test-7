import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mighty-reaches-93229.herokuapp.com"
  /* other custom settings */
});
export { axiosInstance };
