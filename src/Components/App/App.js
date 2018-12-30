/* App Component */
import React from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    // establece el estado inicial del componente
    // un conjunto de tracks (por ahora ficticios)
    this.state = {
      searchResults : [
        {
          name: 'Jump',
          artist: 'Madonna',
          album: 'XXX',
          id: '1'
         },
         // another JSON
        {
          name: 'Every Day',
          artist: 'Madonna',
          album: 'XXX',
          id: '2'
        },
        // another JSON...
         {
          name: 'Otro',
          artist: 'Madonna',
          album: 'XXX',
          id: '3'
        }
      ]
    } 
      
  }

  // render method
  render() {
    return (
      // start JSX
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
    // end JSX
    );
  }
}

export default App;
