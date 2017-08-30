import { RECEIVE_NEWS, REQUEST_NEWS } from './actionCreators';

export const initialState = {
  articles: null,
  loading: false,
  source: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, loading: true, source: action.source };
    case RECEIVE_NEWS:
      return { ...state, loading: false, source: action.source, articles: action.payload };
    default:
      return state;
  }
};

export default reducer;
