import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Search GitHub users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}}`
    );
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    console.log("I was pushed");
    this.setState({ users: [], loading: false });
  };

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar icon="fab fa-github" title="Github - Finder" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
