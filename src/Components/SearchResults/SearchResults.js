/* Search Results Component */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from './TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults" searchResults={this.state.searchResults}>
        <h2>Results</h2>
        {/* pasa 'search results' a 'track list'*/}
        <TrackList tracks={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchResults;
