/* SPOTIFY API - Networking */

// el token del usuario
var userAccessToken = {};
// el identificador el cliente (en este caso, yo)
const clientID = 'c69500efaf69490a962ae5c955858a60';
//
const redirectURI = 'http://localhost:3000/';

// This object will store the functionality needed to interact with the SPOTIFY API.
const Spotify = {

  // task: guardar el play list creado por el usuario en su cuenta de Spotify
  saveUserPlaylist(playlistName, tracks) {
  /*
  Create a method in Spotify.js that accepts two arguments. The first argument is the name of the playlist. The second is an array of track URIs.

  Inside the function, check if there are values saved to the method's two arguments. If not, return.
  */

  // WARNING: preguntar sobre este condicional
    if (playlistName && tracks) {

    } else {
      return;
    }

    /*
    Create three default variables:
    An access token variable, set to the current user's access token
    A headers variable, set to an object with an Authorization parameter containing the user's access token in the implicit grant flow request format
    An empty variable for the user's ID
    */

    const accessToken = '00'; // INCOMPLETO
    const headers = {}; // INCOMPLETO
    userID;

    /*
    Make a request that returns the user's Spotify username.
    Convert the response to JSON and save the response id parameter to the user's ID variable.
    */

    fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
      return response.json();
    }).then(jsonResponse => {

      /*
      Make a request that returns the user's Spotify username.
      Convert the response to JSON and save the response id parameter to the user's ID variable.
      */
     
     userID = jsonResponse.id;
    })
    
  },
  
  // the access token
  token: {},

  // get access token
  // task: obtener el token de acceso a la API
  getAccessToken(token) {
    if (token == true) {
      return token
    } else {
      return fetch(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
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