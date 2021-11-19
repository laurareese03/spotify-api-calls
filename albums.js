import axios from "axios";

const baseURL = "https://api.spotify.com/v1";

// TODO -> add in scope needed for each function

// -------------------------------------------
// ----------------- ALBUMS ------------------
// -------------------------------------------

export function getAlbum(albumID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + '/albums/' + albumID, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get album information");
    });
  });
}

export function getSeveralAlbums(albumIDs, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + '/albums?ids='+albumIDs, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get multiple album information");
    });
  });
}

export function getAlbumTracks(albumID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + '/albums/' + albumID+ '/tracks', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get album tracks");
    });
  });
}

export function getSavedAlbums(auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + '/me/albums', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get your saved albums");
    });
  });
}

// -------------------------------------------
// ----------------- ALBUMS ------------------
// -------------------------------------------
export function getTrack(trackID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + '/tracks/' + trackID, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get track information");
    });
  });
}

export function getTopArtists(auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + 'me/top/artists', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get top artists");
    });
  });
}

export function getCurrentUser(auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + 'me', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Cannot get current user");
    });
  });
}

export function getExternalUser(userID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + 'users/' + userID, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Unable to find user");
    });
  });
}

export function createNewPlaylist(userID, playlistName, auth) {
  return new Promise(function(resolve, reject) {
    axios.post(baseURL + 'users/' + userID + '/playlists', {
      "name": playlistName
    }, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Unable to create playlist");
    });
  });
}

export function getUserPlaylists(userID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + 'users/' + userID + '/playlists', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Unable to find user playlists");
    });
  });
}

export function getPlaylistTracks(playlistID, auth) {
  return new Promise(function(resolve, reject) {
    axios.get(baseURL + 'playlists/' + playlistID + '/tracks', auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Unable to load playlist tracks");
    });
  });
}

export function addTracksToPlaylist(playlistID, tracks, auth) {
  return new Promise(function(resolve, reject) {
    axios.post(baseURL + 'playlists/' + playlistID + '/tracks', {
      "uris": tracks
    }, auth).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error ? error : "Unable to add tracks to playlist");
    });
  });
}
