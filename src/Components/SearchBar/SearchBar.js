/* Search Bar Component */
import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    // bind methods
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // search method
  // task: realizar la búsqueda de acuerdo al término introducido
  search() {
    /*
    In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.
    */
  }

  // handle term change
  // task: manejar el término ingresado por el usuario en la barra de búsqueda
  handleTermChange(event) {
    /*
    71.
    In SearchBar.js create a method called handleTermChange with the following functionality:

    Accepts an event argument
    Sets the state of the search bar's term to the event target's value.
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
