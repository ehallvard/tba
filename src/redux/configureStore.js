import { rootReducer, initialState } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from './loggingMiddleware';
import thunkMiddleware from 'redux-thunk';

export const store: Store<{}> = (): Store<{}> => {
  const store: Store<{}> = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, loggingMiddleware));

  return store;
};

export default store;
