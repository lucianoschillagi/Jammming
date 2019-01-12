/* Search Results Component (child of 'App') */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      // pasa el estado del componente 'App' como una props al componente 'Search Results'
      <div className="SearchResults" 
           searchResults={this.props.searchResults} 
           onAdd={this.props.addTrack} 
           isRemoval={false}>
        <h2>Results</h2>

        {/* ↓ pass down */}
        {/* 'Track List' es componente hijo de 'Search Results' */}
        <TrackList tracks={this.props.searchResults} 
                   onAdd={this.props.onAdd} 
                   isRemoval={this.props.isRemoval}/>

      </div>
    );
  }
}

export default SearchResults;
