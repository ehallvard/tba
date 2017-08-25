type State = {
    currentTime: Date
};

export const types = {
    'FETCH_NEW_TIME': 'FETCH_NEW_TIME'
};
const initialState: State = {
    currentTime: new Date()
}

export const reducer = (state = initialState, action): State => {
    return state;
}

export const actions = {
    updateTime: () => ({type: types.FETCH_NEW_TIME})
}