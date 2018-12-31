/* Track Component */
import React from 'react';
import './Track.css';

/*
Inside of Track.js create a component called Track with a .render() method that returns this HTML.

Follow the guidelines below when you write the HTML (linked above) as JSX:

Change all class attributes to className.
Do not change the class values, as we will use them in a later step to add style.
Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action.
Use the comments in the HTML document to determine if you need to import any components.

Export the Track component.
*/

class Track extends React.Component {

  renderAction() {
    /*if (isRemoval) {
      // TODO: displays - anchor tag
      return <a>-</a>
    } else {
      // TODO: displays + anchor tag
      return <a>+</a>
    }*/
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


