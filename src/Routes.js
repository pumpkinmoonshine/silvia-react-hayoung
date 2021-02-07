import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Container from "./Pages/Container";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route exact path="/movies" component={Container} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
