import * as types from './types';

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