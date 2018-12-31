/* Tracklist Component */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

/*
34.
In the TrackList component, use the .map() method to render 
each track in the tracks property.
Set the key attribute to track.id.

Hint
Inside the TrackList component's render method, use .map() 
on this.props.tracks to render each track in the list.
This will require you to pass the current track as 
an attribute called track to the Track component
*/

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {
         this.props.tracks.map(track => {      
         {/* devuelve un NUEVO array,
          en este caso un array de [Track] */}      
         return <Track key={track.id} track={track} />        
        }) 
      }
      </div>
      
    );
  }
}

export default Tracklist;
