/* App Component */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// TODO: import SearchBar, SearchResults and Playlist components

class App extends Component {

  // constructor method
  constructor(props) {
    // construye este componente (App) heredando las propiedades de su padre (React.Component)
    super(props);
    // establece el estado inicial del componente
    this.state.searchResults = [
      trackOne = {
        name: 'Jump',
        artist: 'Madonna',
        album: 'XXX',
        id: '1'
       },
      trackTwo = {
        name: 'Every Day',
        artist: 'Madonna',
        album: 'XXX',
        id: '2'
      },
      trackThree = {
        name: 'Otro',
        artist: 'Madonna',
        album: 'XXX',
        id: '3'
      },
    ]
  }

  // render method
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          { /*  Add a SearchBar component  */}
          <div className="App-playlist">
          { /*  Add a SearchResults component  */}
          { /*  Add a Playlist component  */}
          </div>
        </div>
    </div>
    );
  }
}

export default App;
