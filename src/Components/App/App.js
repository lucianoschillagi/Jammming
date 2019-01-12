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
    this.removeTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // task: agregar una canción del Search Results al Play List. Comprobar si la canción que
  // se quiere agregar ya está guardada en el play list.
  addTrack(track) {

    /*
    To break it down

    - First look through your current playlist array. Make sure that the ID of the track you are about to add does not have the same ID of any tracks in the array. You don't  want duplicates.
    - If that is good, use `setState` to add the track to your playlist array


    Steve - Moderator [hace 1 día]
    You want to create this function in App.js and call it `addTrack`

    */
    // comprueba si la canción que se quiere agregar ya está guardada en el playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      
      this.setState.playlistTracks(track);
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
