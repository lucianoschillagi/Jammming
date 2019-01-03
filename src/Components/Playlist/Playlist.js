/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
// import TrackList component
import TrackList from '../TrackList/TrackList';

/*
Add a constructor to the Playlist component. Call super(props) in the constructor method.

Bind the current value of this to .handleNameChange().
*/

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange(this);
  }

  
  handleNameChange(event) {
    // WARNING: pedir ayuda (59)
  }

  render() {
    return (
      
      <div className="Playlist" onNameChange={this.props.updatePlaylistName}>
        {/* el nombre del playlist */}
        <input value="New Playlist"/>

        {/* la lista de tracks */}
        {/* Pasa el track list dentro del play list y le agrega un método para remover tracks */}
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.removeTrack}/>

        {/* el botón para guardar el play list actual */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
