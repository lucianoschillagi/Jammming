/* Search Bar Component */
import React from 'react';
import './SearchBar.css';

// Abstract: una barra de búsqueda para que el usuario busque canciones
// de acuerdo a un término. (por ej: por canción, artista o álbum)
class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    // bind methods
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // task: manejar la información ingresada por el usuario en el
  // placeholder 'Enter A Song Title'
  handleTermChange(event) {
    // le pasa a la propiedad 'term' el valor obtenido
    this.setState({ term: event.target.value});
  }

  // search method
  // task: realizar la búsqueda de acuerdo al término introducido
  search() {
   this.props.onSearch(this.state.term)
  }

  // render method
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
               onChange={this.handleTermChange} />   
        <a onSearch={this.props.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
