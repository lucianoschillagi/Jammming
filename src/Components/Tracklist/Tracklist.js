/* Tracklist Component */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
      {
         this.props.tracks.map(track => {      
         {/* devuelve un NUEVO array,
          en este caso un array de [Track] */}      
         return <Track key={track.id} track={track} onAdd={this.props.onAdd} />        
        }) 
      }
      </div>
      
    );
  }
}

export default Tracklist;

/*
Pass onAdd from the TrackList component to the Track component.

Inside the TrackList.js .render() method, pass this.props.onAdd 
as an attribute called onAdd to the Track component.

*/