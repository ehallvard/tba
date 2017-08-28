// @flow
import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Index } from "./Index";
import Home from "../views/Home/Home";
// import About from "../views/About/About";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={Home} />
            {/* <Route path="about" component={About} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
