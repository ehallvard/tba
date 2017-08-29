// @flow
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardsContainer from "../views/cards/cards-container.jsx";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="*" component={CardsContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
