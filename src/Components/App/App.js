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
      playlistTracks: [
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

    // bind methods
    this.addTrack = this.addTrack.bind(this); 
    this.removeTrack = this.addTrack.bind(this);
  }

  // task: agregar una canción del Search Results al Play List. Comprobar si la canción que
  // se quiere agregar ya está guardada en el play list.
  addTrack(track) {

    // comprueba si la canción que se quiere agregar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // entonces, si ya está guardada, no agregar nada 
      return;
    } else {
      // pero si NO estaba guardada en el playlist, AGREGAR al playlist
      // WARNING: incompleto, PEDIR AYUDA
    }
  }
   
  // task: eliminar una canción de un track list
  removeTrack(track) {
    // comprueba si la canción que se quiere eliminar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // entonces, si ya está guardada, no agregar nada 
      return;
    } else {
      // WARNING: incompleto, PEDIR AYUDA
    }
  }

  // task: actualizar el nombre de la playlist
  updatePlaylistName(name) {
    this.state.playListName = name;
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
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
    // end JSX
    );
  }
}

export default App;
