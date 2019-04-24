require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var toDo = process.argv[2];

var toDoFollow = process.argv.slice(3).join(" ");

var fs = require("fs");

console.log(toDo, toDoFollow);

var getArtistNames = function(artist) {
    return artist.name;
};




function concertThis (artist){
console.log("Concert is working");
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryUrl)
.then(function (response) {
    console.log(response.data);

    if (!response.data.length) {
        console.log( "No results found");
    } else {

        console.log("See me now");
        for (var i = 0; i < response.data.length; i++) {

            var show = response.data[i];

            console.log(show.venue.city);

        };
    }



});

};

function spotifyThisSong (songName){
    console.log("spotify is working");
};

function movieThis (movieName){
    console.log("movie is working");
};

function doWhatItSays () {
    console.log("dowhatitsays is working");
};

if (toDo = "concert-this"){
concertThis(toDoFollow);

}
else if (toDo = "spotify-this-song"){
    spotifyThisSong(toDoFollow);
}
else if (toDo = "movie-this"){
    movieThis(toDoFollow);
}
else if (toDo = "do-what-it-says"){
    doWhatItSays();
}
else {
    console.log("Function running but you did it wrong");
};