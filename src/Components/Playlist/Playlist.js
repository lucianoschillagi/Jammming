/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
// import TrackList component
import TrackList from '../TrackList/TrackList';

/*

61- In the Playlist render method, pass .handleNameChange() to an onChange property.
*/

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange(this);
  }


  handleNameChange(event) {
    // WARNING: pedir ayuda (59)
  }

  // Pass savePlaylist to the Playlist component as an attribute called onSave.

  render() {
    return (
      
      <div className="Playlist" 
           onNameChange={this.props.updatePlaylistName} 
           onChange={this.handleNameChange} 
           onSave={this.props.savePlaylist}>
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
