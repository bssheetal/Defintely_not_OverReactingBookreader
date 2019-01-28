import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SearchGrid from "../components/SearchGrid";

import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    search: "",
    books:[]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }



  render() {
    return (
      <div>
      <SearchGrid
        id="filled-search"
        label="Search field"
        type="search"
        className="searchparam"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Search for books"
      />
      
      </div>
    );
  };
}

export default Search;