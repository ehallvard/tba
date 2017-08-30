export const REQUEST_NEWS = 'REQUEST_NEWS';
function requestNews(source) {
  return {
    type: REQUEST_NEWS,
    source,
  };
}

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
function receiveNews(source, json) {
  return {
    type: RECEIVE_NEWS,
    source,
    articles: json.articles,
  };
}

export function fetchNews(source = 'cnn') {
  return function(dispatch) {
    dispatch(requestNews(source));
    const apiKey = '59cc58874546457f96a87b784cddf8d4';

    return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
      .then(response => response.json(), error => console.log('An error occurred.', error))
      .then(json => dispatch(receiveNews(source, json)));
  };
}
