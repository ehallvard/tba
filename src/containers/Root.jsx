// @flow

import * as React from "react";
import { Provider } from "react-redux";
import App from "./App.jsx";

export const Root = ({store, actions}) => {
  return (
    <Provider store={store}>
      <App actions={actions} />
    </Provider>
  );
};

export default Root;
