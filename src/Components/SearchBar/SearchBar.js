/* Search Bar Component */
import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
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
