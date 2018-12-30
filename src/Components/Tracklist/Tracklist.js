/* Tracklist Component */
import React from 'react';
import './Tracklist.css';
// TODO: import Track component

/*
In the TrackList component, use the .map() method to render each t
rack in the tracks property.

Set the key attribute to track.id.

Inside the TrackList component's render method, use .map() 
on this.props.tracks to render each track in the list.

This will require you to pass the current track as an attribute 
called track to the Track component.
*/

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
      { /* You will add a map method that renders a set of Track components */}
      </div>
    );
  }
}

export default Tracklist;
