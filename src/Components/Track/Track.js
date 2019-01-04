/* Track Component */
import React from 'react';
import './Track.css';

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
  addTrack(track) {


  }

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
      </div>
    );
  }
}

export default Track;

/*
Okay, no worries. Just to let you know for future reference, you can get a lot out of these sessions if you come with some concrete questions about the concepts you're having trouble with in a general sense. I would love to help you with those so that you can hopefully come away with a broader understanding of how to approach the project :)
Darc profile
For now though, it looks like our time is coming to an end. But for the last step that you mentioned, you would just need to add an onClick event handler and set it equal to {this.removeTrack} 


*/

