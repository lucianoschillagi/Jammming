/* SPOTIFY API - Networking */

// una variable para almacenar el token del usuario
var userAccessToken = '';
// el identificador el cliente (en este caso, yo)
const clientID = 'c69500efaf69490a962ae5c955858a60';
// la url de redirección (adonde debe ir el navegador, donde está alojada mi aplicación)
const redirectURI = 'http://localhost:3000/';

// This object will store the functionality needed to interact with the SPOTIFY API.
const Spotify = {

  // task: obtener el token de acceso del usuario a Spotify
  getAccessToken() {
    
    // ⚠️ 1er condición: el usuario ya tiene un token de acceso
    if (userAccessToken == true) {
      return userAccessToken;

    // 2da condición: el usuario NO tiene token de acceso, hay que solicitarlo
    } else {
      return fetch(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
    } 

    // 🙀 Use the guide to determine how to parse the URL and set values for your access token and expiration time.

  },

   // task: realizar una búsqueda de acuerdo al término ingresado por el usuario
   search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        // para interactuar con la API de Spotify es necesario enviarle mi token 
        // en el header de la solicitud
        headers: {Authorization: `Bearer ${userAccessToken}`}
      
    }).then(response => {
      // convierte la respuesta en un JSON
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        // mapea la respuesta para obtener un nuevo array
        // con los valores deseados: id, name, artist, album & uri
        return jsonResponse.tracks.items.map(track => ({
          // devuelve un nuevo array de tracks
          // extrae los valores deseados:
          // id, name, artist, album & uri
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri // donde está alojado el track
        }));
      } else {
        return [];
      }
    });
  }

  // task: guardar el playlist creado por el usuario en su cuenta de Spotify
  // argumentos que habrá que pasarle a la función:
  // playlistName, el nombre del playlist
  // urisTrack: las 'direcciones' de los tracks. [track URIs]
  savePlaylist(playlistName, urisTrack) {
  // ⚠️ : preguntar sobre este condicional, no estoy del todo seguro (90)
    if (playlistName && urisTrack) {

    } else {
      return;
    }

    // necesario para guardar el playlist del usuario:
    // su token
    const accessToken = userAccessToken;
    // el header con el token para realizar la solicitud de guardado
    // ⚠️ : implicit grant flow, corroborar si está bien (91) 
    const headers = { headers: {Authorization: `Bearer ${userAccessToken}`} };
    // el identificador el usuario
    var userID;
    // el identificador de la playlist
    var playlistID;

      // 🚀 1er solicitud a Spotify: (GET) Obtener el ID actual del usuario.
      fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
        // convierte la respuesta en un JSON
        return response.json();
      }).then(jsonResponse => {
      // guarda el ID del usuario obtenido en la respuesta
      // en la variable 'userID'
      userID: jsonResponse.id // 📀


        // 🚀 2da solicitud a Spotify: (POST) Crear una nueva playlist, 
        // envía el id del usuario en la solicitud a Spotify
        // espera el identificador del playlist en la respuesta (playlist ID)
        fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, 
        {
          // ⚠️ : REVISAR ESTO 
          headers: {Authorization: `Bearer ${userAccessToken}`} ,
          contentType: 'application/json',
          method: 'POST',
          name: playlistName
        })

        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          // guarda el ID de la playlist
          // en la variable 'playlistID'
          playlistID: jsonResponse.id // 📀


          // 🚀 3ra solicitud a Spotify: (POST) Escribir la playlist con el array de tracks, 
          // envía el identificador el playlist recién creado 
          // espera el identificador del playlist en la respuesta, OTRO NUEVO (playlist ID)
          fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, 
          {
            // ⚠️ : REVISAR ESTO 
            headers: {Authorization: `Bearer ${userAccessToken}`} ,
            contentType: 'application/json',
            method: 'POST',
            name: playlistName
          })
        })
  },
  
 
};

export default Spotify;
