/* Tracklist Component */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList"
           isRemoval={true}>
           onRemove={this.props.onRemove}
      {
         this.props.tracks.map(track => {      
         {/* devuelve un NUEVO array,
          en este caso un array de [Track] */}   
          // Pass onRemove and isRemoval from the TrackList component to the Track component.  
         return <Track key={track.id} 
                       track={track} 
                       onAdd={this.props.onAdd}
                       onRemove={this.props.onRemove}
                       isRemoval={this.props.isRemoval}/>   
        }) 
      }
      </div>
    );
  }
}

export default TrackList;