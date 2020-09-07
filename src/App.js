import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Single from "./Single";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router Dom</h1>
        <p> Get a post detail based on id</p>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/post/:id" component={Single} />
        </Switch>
      </div>
    </Router>
  );
}
