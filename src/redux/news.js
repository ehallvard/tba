import * as types from './types';

export const initialState = {
    articles: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_NEWS:
            return { ...state, articles: action.payload };
        default:
            return state;
    }
}

export default reducer;