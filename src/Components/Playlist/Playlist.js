/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
//TODO: import { TrackList } from '';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        {/* Add a TrackList component */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
