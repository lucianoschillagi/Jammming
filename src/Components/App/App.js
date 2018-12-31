/* App Component */
import React from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  // este componente (App) hereda todas las propiedades
  // de su super clase (React.Component)
  constructor(props) {
    super(props);
    // establece el estado inicial del componente
    // un conjunto de tracks (por ahora ficticios)
    this.state = {
      // search results representa una serie de tracks (ficticios)
      // obtenidos mediante una búsqueda realizada por el usuario
      searchResults : [
        {
          name: 'Jump',
          artist: 'Madonna',
          album: 'XXX',
          id: '1'
         },
        {
          name: 'Every Day',
          artist: 'Madonna',
          album: 'XXX',
          id: '2'
        },
         {
          name: 'Otro',
          artist: 'Madonna',
          album: 'XXX',
          id: '3'
        }
      ],
      // play list name
      playListName: 'Mi Lista de reproducción',

      // play list tracks
      playListTracks: [
        {
          name: 'Pedro',
          artist: 'Nick Drake',
          album: 'XXX',
          id: '1'
         },
        {
          name: 'La cucaracha',
          artist: 'Babasónicos',
          album: 'XXX',
          id: '2'
        },
         {
          name: 'La maza',
          artist: 'Silvio',
          album: 'XXX',
          id: '3'
        }
      ]
    } 
      
  }

  /*
  38.
  Pass the playlist name and tracks from the App component to the Playlist component.

  Inside the App.js .render() method, pass this.state.playlistName and 
  this.state.playlistTracks as attributes called playlistName and playlistTracks 
  in the Playlist component.
  */

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
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
    // end JSX
    );
  }
}

export default App;
