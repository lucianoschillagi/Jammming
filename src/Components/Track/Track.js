/* Track Component */
import React from 'react';
import './Track.css';

/*
Add a constructor to the Track component. Call super(props) in the constructor method.

Bind this.addTrack() to the current value of this in the constructor method.
*/

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
  addTrack() {

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{`${this.props.track.artist} ${this.props.track.album}`}</p>
        </div>
        <a className="Track-action">{ /* + or - will go here */}</a>
      </div>
    );
  }
}

export default Track;

/*
Create an .addTrack() method in the Track component. 
Use it to add this.props.track to the playlist.

Pass this.props.track to this.props.onAdd.


*/
