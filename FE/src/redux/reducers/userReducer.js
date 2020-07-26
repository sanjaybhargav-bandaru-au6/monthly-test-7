const initialState = {
  user: {
    userName: "",
    token: ""
  },
  myPosts: [],
  favourites: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "SET_MY_POSTS":
      return { ...state, myPosts: action.payload };
    case "SET_FAVOURITES":
      return { ...state, favourites: action.payload };
    case "LOGOUT":
      return {
        user: {
          userName: "",
          token: ""
        },
        myPosts: [],
        favourites: []
      };

    default:
      return { ...state };
  }
};

export { userReducer };
