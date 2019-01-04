/* Search Bar Component */
import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  // search method
  search() {
    /*
    In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.
    */
  }



  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onSearch={this.props.search} />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
