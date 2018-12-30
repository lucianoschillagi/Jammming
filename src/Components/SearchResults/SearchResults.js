/* Search Results Component */
import React from 'react';
import './SearchResults.css';
import TrackList from './TrackList/TrackList';

/*
Inside the SearchResults.js .render() method, pass this.props.searchResults as 
an attribute called tracks in the TrackList component.
*/

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults" searchResults={this.state.searchResults}>
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchResults;
