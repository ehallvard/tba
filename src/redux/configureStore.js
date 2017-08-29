import { rootReducer, initialState } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './apiMiddleware';
import loggingMiddleware from './loggingMiddleware';

export const store: Store<{}> = (): Store<{}> => {
  const store: Store<{}> = createStore(rootReducer, initialState, applyMiddleware(apiMiddleware, loggingMiddleware));

  return store;
};

export default store;
