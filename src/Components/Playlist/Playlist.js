/* Playlist Component (child of 'App' component) */
import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist';

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange(this);
  }

  // task: manejar el cambio de nombre del playlist
  handleNameChange(event) {
      this.props.onNameChange(event.target.value)
  }

  // dibujar en la pantalla: Playlist, input, TrackList, a
  render() {
    return (
      <div className="Playlist" 
           onNameChange={this.props.updatePlaylistName}
           onRemove={this.props.removeTrack}
           isRemoval={true}
           onChange={this.handleNameChange} 
           onSave={this.props.savePlaylist}>
        {/* el nombre del playlist */}
        <input value="New Playlist" onChange={this.handleNameChange}/>

        {/* la lista de tracks */}
        {/* Pasa el track list dentro del play list y le agrega un método para remover tracks */}
        <TrackList tracks={this.props.playlistTracks} 
                   onRemove={this.props.onRemove} 
                   isRemoval={this.props.isRemoval}/>

        {/* el botón para guardar el play list actual */}
        <a className="Playlist-save" 
           onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
