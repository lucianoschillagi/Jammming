/* SPOTIFY API - Networking */

const clientID = 'c69500efaf69490a962ae5c955858a60';
const redirectURI = 'http://localhost:3000/';

// This object will store the functionality needed to interact with the SPOTIFY API.
const Spotify = {
  
  // the access token
  token: {},

  // get access token
  // task: obtener el token de acceso a la API
  getAccessToken(token) {

    if (token == true) {
      return token
    }
  },

  // task: realizar una búsqueda de acuerdo al término ingresado por el usuario
  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        // para interactuar con la API de Spotify es necesario enviarle mi token 
        // en el header de la solicitud
        headers: {Authorization: `Bearer ${token}`}
      }
    }).then(response => {
      // convierte la respuesta en un JSON
      return response.json();
    }).then(jsonResponse => {
      /*
        87.
        Convert the returned response to JSON.

        Then, map the converted JSON to an array of tracks. If the JSON does not contain any tracks, return an empty array.

        The mapped array should contain a list of track objects with the following properties:

        ID — returned as track.id
        Name — returned as track.name
        Artist — returned as track.artists[0].name
        Album — returned as track.album.name
        URI — returned as track.uri
      */
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => ({
          // extrae los valores deseados:
          // id, name, artist, album & uri
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  }
};

export default Spotify;