import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/navBar";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/calendar" exact={true}>
          <Calendar />
        </Route>
      </Switch>
    </Router>
  );
}