/* Track Component */
import React from 'react';
import './Track.css';

class Track extends React.Component {

  constructor(props) {
    super(props);

    // bind methods
    this.addTrack = this.addTrack.bind(this);
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

  // task: agregar un track al playlist
  addTrack(track) {

    // WARNING: incompleto!

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{`${this.props.track.artist} ${this.props.track.album}`}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>+</a>
      </div>
    );
  }
}

export default Track;


