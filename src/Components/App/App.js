/* App Component */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from '../../util/Spotify';
/*
In App.js, import Spotify and update the .search() method with the Spotify.search() method.

Update the state of searchResults with the value resolved from Spotify.search()'s promise.
*/

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
      
      // search results (obtenidos mediante la solicitud a la API de Spotify)
      searchResults : Spotify.search,

      // user play list name
      playListName: 'Mi Lista de reproducción',

      // user play list tracks
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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

      // si no estaba guardada devolver ese track
      return track
    }
  }
   
  // task: eliminar una canción del track list del playlist
  removeTrack(track) {
    // comprueba si la canción que se quiere eliminar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // entonces, si ya está guardada, no agregar nada 
      return;
    } else {
      // WARNING: incompleto, PEDIR AYUDA
      return track
    }
  }

  // task: actualizar el nombre de la playlist
  updatePlaylistName(name) {
    this.state.playListName = name;
  }

  // task: guardar el playlist  
  savePlaylist() {
  /*
  TODO:
  In App.js create a method called savePlaylist with the following functionality:

  Generates an array of uri values called trackURIs from the playlistTracks property.
  In a later step, you will pass the trackURIs array and playlistName to a method that will save the user's playlist to their account.
  */
  }

  // task: realizar una búsqueda en Spotity de acuerdo al término ingresado
  search(term) {
    console.log(term);
  
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
