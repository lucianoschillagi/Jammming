/* SPOTIFY API - Networking */

// el token del usuario
var userAccessToken = {};
// el identificador el cliente (en este caso, yo)
const clientID = 'c69500efaf69490a962ae5c955858a60';
// la url de redirección (adonde debe ir el navegador, donde está alojada mi aplicación)
const redirectURI = 'http://localhost:3000/';

// This object will store the functionality needed to interact with the SPOTIFY API.
const Spotify = {

  // task: guardar el play list creado por el usuario en su cuenta de Spotify
  saveUserPlaylist(playlistName, urisTrack) {
  
  // WARNING: preguntar sobre este condicional
    if (playlistName && urisTrack) {

    } else {
      return;
    }

    // necesario para guardar el playlist del usuario:
    // su token
    const accessToken = userAccessToken;
    // el header con el token para realizar la solicitud de guardado
    const headers = { headers: {Authorization: `Bearer ${userAccessToken}`} };
    // el identificador el usuario
    userID;

    // solicita el nombre del usuario para luego ponerlo en la variable 'userID'
    fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      // el nombre del usuario (userID)
      id: userID;
    })
  },
  
  // task: obtener el token de acceso del usuario a Spotify
  getAccessToken() {
    
    // 1er condición: el usuario ya tiene un token de acceso
    if (userAccessToken == true) {
      return userAccessToken;

    // 2da condición: el usuario NO tiene token de acceso, hay que solicitarlo
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
        headers: {Authorization: `Bearer ${userAccessToken}`}
      }
    }).then(response => {
      // convierte la respuesta en un JSON
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => ({
          // devuelve un nuevo array de tracks
          // extrae los valores deseados:
          // id, name, artist, album & uri
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri // donde está alojado el track
        }));
      }
    });
  }
};

export default Spotify;