/* Search Results Component */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      // le pasa el estado del componente App al componente SearchResults
      // como un atributo llamadado 'searchResults'
      <div className="SearchResults" searchResults={this.props.searchResults} onAdd={this.props.addTrack}>
        <h2>Results</h2>
        {/* pasa los resultados de la búsqueda (el array de 
        tracks) a través del atributo ´tracks´ del componente TrackList*/}
        {/* también le pasa el método ´onAdd´*/}
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
