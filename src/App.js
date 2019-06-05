import React, { Component } from "react";
import UserItem from "./components/users/UserItem";
import Navbar from "./components/layout/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar icon="fab fa-github" title="Github - Finder" />
        <UserItem />
      </div>
    );
  }
}

export default App;
