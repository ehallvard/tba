import { combineReducers } from 'redux';
import * as news from './news';

export const rootReducer = combineReducers({
  news: news.reducer,
});

export const initialState = {
  news: news.initialState,
};

export default rootReducer;
