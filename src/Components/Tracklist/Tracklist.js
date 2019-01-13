/* Tracklist Component (child of 'Search Results') */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {

  // dibujar en la pantalla: TrackList, [Track].
  render() {
    return (
      <div className="TrackList"
           isRemoval={true}>
           onRemove={this.props.onRemove}
      {
         this.props.tracks.map(track => {      
         {/* devuelve un NUEVO array,
          en este caso un array de [Track] */}     
          return <Track track={track} 
                        key={track.id}
                        name={this.props.track.name}
                        artist={this.props.track.artist}
                        album={this.props.track.album}
                      
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