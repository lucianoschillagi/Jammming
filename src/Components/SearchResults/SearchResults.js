/* Search Results Component (child of 'App') */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      // pasa el estado del componente 'App' como una props al componente 'Search Results'
      <div className="SearchResults" searchResults={this.props.searchResults} onAdd={this.props.addTrack}>
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
