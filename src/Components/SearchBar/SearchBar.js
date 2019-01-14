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

  // task: realizar la búsqueda de acuerdo al término introducido
  search() {

    // TODO: punto 69, pregunté en Slack...
    /*
    1. In SearchBar.js, create a method called `search`
    2. Inside of `search`, call `this.props.onSearch`. `onSearch` takes one argument, a search term which you should have on your state inside of SearchBar
    */
    this.props.onSearch(this.state.term);
  }

  // dibujar en la pantalla: SearchBar, input, a
  render() {
    return (
      <div className="SearchBar"
           onSearch={this.props.search}>
        <input placeholder="Enter A Song, Album, or Artist" 
               onChange={this.handleTermChange} />   
        <a onSearch={this.props.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
