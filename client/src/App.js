import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            {/* <Route exact path="/saved" component={Saved} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
