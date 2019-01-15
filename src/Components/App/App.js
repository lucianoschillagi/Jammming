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
    this.state = {
      // los resultados de la última búsqueda
      searchResults:[],

      // el nombre del playlist del usuario
      playlistName: 'Mi Lista de reproducción',

      // los tracks de la playlist del usuario
      playlistTracks:[],
    } 

    // bind methods
    this.addTrack = this.addTrack.bind(this); 
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
 
  // task: buscar tracks de acuerdo al término introducido por el usuario
  // en la barra de búsqueda
  search() {
    Spotify.search().then(searchResults => 
      {this.setState({searchResults: searchResults});
    });
  }

  // task: guardar el playlist del usuario
  savePlaylist() {
    Spotify.savePlaylist().then(playlistTracks => 
      {this.setState({playlistTracks: playlistTracks});
    });
  }

  // ⚠️ : no sé si .addTrack y .removeTrack están bien implementados. CONSULTAR
  
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
