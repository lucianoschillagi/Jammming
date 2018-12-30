/* Search Results Component */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from '../TrackList/TrackList';

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


/*
35.
Render the track name, artist, and album.

Use the following property calls to access the track's name, artist, and album:

this.props.track.name
this.props.track.artist
this.props.track.album

*/