import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { timelineReducer } from "./reducers/timelineReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  timelineState: timelineReducer
});

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
