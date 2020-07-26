const initialState = {
  allPosts: []
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIMELINE":
      console.log(action.payload.allPublicPosts);
      return { ...state, allPosts: [...action.payload.allPublicPosts] };

    default:
      return { ...state };
  }
};

export { timelineReducer };
