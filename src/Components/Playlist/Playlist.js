/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
// import TrackList component
import TrackList from '../TrackList/TrackList';

/*
39.
Pass the playlist tracks from the Playlist component to the TrackList component.

Hint
Inside the Playlist.js .render() method, pass this.props.playlistTracks 
as an attribute called tracks in the TrackList component.

*/
class Playlist extends Component {
  render() {
    return (
      
      <div className="Playlist">
        {/* el nombre del playlist */}
        <input value="New Playlist"/>

        {/* las lista de tracks */}
        {/* Pasa el track list dentro del play list */}
        <TrackList tracks={this.props.playlistTracks}/>

        {/* el botón para guardar el play list actual */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
