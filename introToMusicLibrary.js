let library = {

    songs: { s01: { id: "s01",
                     name: "Money",
                     artist: "Pink Floyd",
                     album: "Dark Side of the Moon" },
              s02: { id: "s02",
                     name: "Blessings",
                     artist: "Chance, The Rapper",
                     album: "Colouring Book"},
              s03: { id: "s03",
                     name: "Purple Haze",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
              s04: { id: "s04",
                     name: "Little Wing",
                     artist: "Jimi Hendrix",
                     album: "Are You Experienced"},
            },
  
  
    playlists: { p01: { id: "p01",
                        name: "Coding Jamz",
                        tracks: ["s01", "s03"],
                      },
                 p02: { id: "p02",
                        name: "Music to cry to",
                        tracks: ["s02"],
                      },
               },



//        generateUid: function() {
//               return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//        },




//        getSongNameByID: function(id) {
//               return library.songs[id].name;
//        },

//        getAllSongNames: function() {
//               // should return an array of the names of songs in the songlist
//               let songIds = Object.keys(library.songs);
//               //     console.log(songIds);
//               let resultArray = [];
//               for (i = 0; i < songIds.length; i++) {
//                      resultArray.push(library.songs[songIds[i]].name);
//               }
//               return resultArray;
//        },

//        getPlaylistNameByID: function(playlistID) {
//               // should return an 
//               return library.playlists[playlistID].name;
//        },

//        getAllPlaylistNames: function () {
//               // return an array of the names of all the playlists
//               let playlistIds = Object.keys(library.playlists); //keyでプレイリストをみる
//               let resultArray = [];
//               for (i = 0; i < playlistIds.length; i++) { // check all p01, p02.. 
//                      resultArray.push(library.playlists(playlistIds[i]).name);
//               }
//               return resultArray;
//        },

//        getPlaylistSongs: function(playlistID) {
//               // List the names of the songs in a particular playlist
//               // 1. get tracks list
//               // 2. loop
//               let songIDs = library.playlists[playlistID].tracks;
//               // console.log(songIDs); // for checking if it works
//               let resultArray = [];
//               for (i = 0; i < songIDs.length; i++) {
//                      resultArray.push(library.getSongNameByID(songIDs[i])); // call the function
//               }
//               return `The songs in playlist ${library.getPlaylistSongs(playlistID)}: ${resultArray}`;
//        },

       



//        // 1.
//        addSong: function(songName, songArtist, songAlbum) {
//               let randomID = library.generateUid();

//               //my solution
//               // return library.songs[randomID] = {
//               //        name: songName,
//               //        artist: songArtist,
//               //        album: songAlbum,
//               // }

//               //solution
//               let newSong = {
//                      id: randomID,
//                      name: songName,
//                      artist: songArtist,
//                      album: songAlbum,
//               }
//               library.songs[randomID] = newSong; // under 's04'
//               console.log(library.getAllSongNames);
//        },
       
//        // 2.
//        addSongToPlaylist: function(songID, playlistID) {
//               //mysolution
//               // return library.playlists = {
//               //        name: songID,
//               //        tracks: playlistID,
//               // }

//               //solution
//               library.getPlaylistSongs(playlistID)
//        },
       
//        // 3.
//        addPlaylist: function(playlistName, arrOfSongs) {
//               let id = library.generateUid();
//               return library = {
//                      playlistName: playlistName, arrOfSongs,
//               }
//        },
}  




// First assignment on Dec 16, 2020

// let keys = Object.keys(library);
// console.log(keys);
// // // [songs, playlists]
// keys = Object.keys(library.songs);
// console.log(keys);
// // // [s01, s02, s03, s04]
// keys = Object.keys(library.songs.s01);
// console.log(keys);
// // // [id, name, artist, album]

// // 1. console.log() the name of the third song on the songlist
// console.log(library.songs.s03.name);   // Purple Haze
// // 2. console.log() the artist of the first track in the song list
// console.log(library.songs.s01.artist);    //Pink Floyd
// // 3. console.log() the entire p01 object
// console.log(library.playlists.p01);    // { id: 'p01', name: 'Coding Jamz', tracks: [ 's01', 's03' ] }

// // 4. consoel.log(the list of song IDs)
console.log(Object.keys(library.songs));
// console.log(Object.keys(library.songs));

// // 5. add a song, and confirm that it was added by console logging it a second time.   
// library.songs.s05 = {
//        id: "s05",
//        name: "Sleepy",
//        artist: "Sweet Kitty",
//        album: "Sitting on the Sofa",
// },  









// console.log(library.songs.s05);

// console.log(library.getPlaylistByID["s01"]);

// console.log(library.getPlaylistNameByID);

// console.log(library.getAllPlaylistNames());

// console.log(library.getPlaylistSongs('p01'));

// console.log(library.generateUid());  // e9a5

// //1.
// console.log(library.addSong("September", "Aidan", "album"));  // { name: 'Name', artist: 'Aidan', album: 'myAlbum' }
// console.log(library.getAllSongNames());  // [ 'Money', 'Blessings', 'Purple Haze', 'Little Wing', 'Name' ]

// //2.
// console.log(library.addSong("Name", "Shiori", "myAlbum"));  // { name: 'Name', artist: 'Shiroi', album: 'myAlbum' }
// library.addSong("my playlist", ["s02", "s03"])

// //3.
// console.log(library.addPlaylist(["05"]));  // { playlistName: [ '05' ], arrOfSongs: undefined }

