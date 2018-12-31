/* Search Results Component */
import React from 'react';
import './SearchResults.css';
// import Track List
import TrackList from '../TrackList/TrackList';

/*


*/

class SearchResults extends React.Component {
  render() {
    return (
      // le pasa el estado del componente App al componente SearchResults
      // como un atributo llamadado 'searchResults'
      <div className="SearchResults" searchResults={this.props.searchResults}>
        <h2>Results</h2>
        {/* pasa los resultados de la búsqueda (el array de 
        tracks) a través del atributo ´tracks´ del componente TrackList*/}
        <TrackList tracks={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchResults;
