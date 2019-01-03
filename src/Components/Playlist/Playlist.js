/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
// import TrackList component
import TrackList from '../TrackList/TrackList';

/*
Pass onRemove from the Playlist component to the TrackList component.

Pass isRemoval with a value of true down to TrackList.

Inside the Playlist.js .render() method, pass this.props.onRemove as an attribute called onRemove in the TrackList component.
*/

class Playlist extends Component {
  render() {
    return (
      
      <div className="Playlist">
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
