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
                        tracks: ["s01", "s03"]
                      },
                 p02: { id: "p02",
                        name: "Music to cry to",
                        tracks: ["s02"]
                      }
               },
}  


// let keys = Object.keys(library.songs); //今いるキー
// // [songs, playlists]
// Object.keys(library.songs); //今いるキー
// // [s01, s02, s03, s04]
// Object.keys(library.songs.s01);
// // [id, name, artist, album]

//console.log() the name of the third song on the songlist
console.log(library.songs.s03.name);

//console.log() the artist of the first track in the song list
console.log(library.songs.s01.artist);

//console.log() the entire p01 object
console.log(library.playlists.p01);

//consoel.log(the list of song IDs)
console.log(Object.keys(library.songs));
// function printIds() {
//        // let ids = Object.keys(library.songs);
//        let data = library.songs.id;
//        for (i = 0; i < data.length; i++) {
//            console.log(data[i]);
//        }
//    };
//    library.printIds();

//add a song, and confirm that it was added by console logging it a second time.   
library.songs.s05 = {
       id: "s05",
       name: "Sleepy",
       artist: "Sweet Kitty",
       album: "Sitting on the Sofa",
},  
console.log(library.songs.s05);

