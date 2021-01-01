import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/navBar";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Modal from 'react-modal';
export default function App() {

  useEffect(() => {
    Modal.setAppElement('#root')
  }, [])

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