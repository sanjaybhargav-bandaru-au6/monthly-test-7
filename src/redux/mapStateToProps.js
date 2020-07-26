const userState = state => ({ userState: { ...state.userState } });
const timelineState = state => ({ timelineState: { ...state.timelineState } });
const allState = state => ({ allState: { ...state } });

export { userState, timelineState, allState };
