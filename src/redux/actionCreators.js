import * as types from './types';

const host = 'https://andthetimeis.com';
export const fetchNewTime = ( timezone = 'cet', str='now') => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString(),
    meta: {
        type: 'api',
        url: `${host}/${timezone}/${str}.json`
    }
})

export const login = (user) => ({
    type: types.LOGIN,
    payload: user
})

export const logout = () => ({
    type: types.LOGOUT
})

const newsHost =  'https://newsapi.org/v1/articles'
const apiKey = '59cc58874546457f96a87b784cddf8d4';
export const fetchNews = (source = 'cnn') => ({
    type: types.FETCH_NEWS,
    payload: [],
    meta: {
        type: 'api',
        url: `${newsHost}?source=${source}&apiKey=${apiKey}`
    }
})