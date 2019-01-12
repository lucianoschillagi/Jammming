/* Track Component (child of Track List) */
import React from 'react';
import './Track.css';
import Playlist from '../Playlist/Playlist';

class Track extends React.Component {

  constructor(props) {
    super(props);

    // bind methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    /*if (isRemoval) {
      // TODO: displays - anchor tag
      return <a>-</a>
    } else {
      // TODO: displays + anchor tag
      return <a>+</a>
    }*/
  }

  // task: agregar un track al playlist cuando el usuario tapea el +
  addTrack() {
      <Playlist onAdd={this.props.track}/>
  }

  // task: eliminar un track particular
  removeTrack() {

  }

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
