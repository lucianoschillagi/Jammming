/* App Component (parent component) */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from '../../util/Spotify';

// import components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    // establece el estado inicial del componente
    // un conjunto de tracks (por ahora ficticios)
    this.state = {
      searchResults : [
        {
          name: 'Song_1',
          artist: 'Artist_1',
          album: 'Album_1',
          id: '1'
        },
        {
          name: 'Song_2',
          artist: 'Artist_2',
          album: 'Album_2',
          id: '2'
        },
        {
          name: 'Song_3',
          artist: 'Artist_3',
          album: 'Album_3',
          id: '3'
        },
      ],

      /*
      In App.js, import Spotify and update the .search() method with the Spotify.search() method.

      Update the state of searchResults with the value resolved from Spotify.search()'s promise.
      */

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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // task: agregar una canción del Search Results al Play List. Comprobar si la canción que
  // se quiere agregar ya está guardada en el play list.
  addTrack(track) {

    // comprueba si la canción que se quiere agregar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // si ya está guardada, no guardar
      return;
    } else {
      // si NO está guardada, guardar 
      //(cambia el estado actual del componente al agregarle un nuevo objeto)
      this.setState({playlistTracks:track});
    }
  }
   
  // task: eliminar una canción del track list del playlist
  removeTrack(track) {
    // comprueba si la canción que se quiere eliminar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      // entonces, si ya está guardada, eliminar. INCOMPLETO 
      return;
    } 
  }

  // task: actualizar el nombre del playlist
  updatePlaylistName(name) {
    this.setState = ({playListName: name});
  }

  // task: guardar el playlist  
  savePlaylist() {
    // el array de tracks a guardar (por ahora un simulacro al agarrar los tracks
    // de playlistTracks). Luego tomará un array de URIs provistos por Spotify
    var tracksURIs = this.playlistTracks;

    // TODO: tb pasar luego el nombre del playlist que se quiere guardar
  }

  // dibujar en la pantalla: h1, SearchBar, SearchResults, PlayList.
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">

          <div className="App-playlist">
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
    );
  }
}



export default App;
