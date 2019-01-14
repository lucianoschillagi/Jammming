/* Track Component (child of Track List) */
import React from 'react';
import './Track.css';
import Playlist from '../Playlist/Playlist';

/*
Within Track.js. isRemoval should be passed as prop because we do not know the value of isRemoval as yet. Like so;

  renderAction() {
    if (this.props.isRemoval) {.........

*/

class Track extends React.Component {

  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a>-</a>
    } else {
      return <a>+</a>
    }
  }

  // task: agregar un track al playlist cuando el usuario tapea el +
  addTrack() {
      <Playlist onAdd={this.props.track}/>
  }

  // task: eliminar un track particular
  removeTrack() {
      <Playlist onRemove={this.props.track}/>
  }

  // dibujar en la pantalla: Track, 
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>+</a>

        {/* REVISAR: esta línea está bien? */}
        <a className="Track-action" onClick={this.removeTrack}>-</a>
      </div>
    );
  }
}

export default Track;
