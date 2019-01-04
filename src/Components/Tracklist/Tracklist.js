/* Tracklist Component */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList" isRemoval={false}>
      {
         this.props.tracks.map(track => {      
         {/* devuelve un NUEVO array,
          en este caso un array de [Track] */}      
         return <Track key={track.id} 
                       track={track} 
                       onAdd={this.props.onAdd}
                       onRemove={this.props.onRemove}
                       isRemoval={this.props.isRemoval}   
        }) 
      }
      </div>
    );
  }
}

export default TrackList;

