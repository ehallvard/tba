import { combineReducers } from "redux";
import * as currentUser from "./currentUser";
import * as currentTime from "./currentTime";
import * as news from "./news";

export const rootReducer = combineReducers({
  currentTime: currentTime.reducer,
  currentUser: currentUser.reducer,
  news: news.reducer
});

export const initialState = {
  currentTime: currentTime.initialState,
  currentUser: currentUser.initialState,
  news: news.initialState
};

export default rootReducer;
