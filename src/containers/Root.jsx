// @flow

import * as React from "react";
import { Provider } from "react-redux";
import App from "./App.jsx";
import configureStore from '../redux/configureStore';

export const Root = (props) => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
