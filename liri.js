//Sets enviromental Variables
require("dotenv").config()

//Importing NPM Packages 
var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require("moment");
//Import API Keys 
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
//Import FS Package to read/write 
var fs = require("fs");





var toDo = process.argv[2];

var toDoFollow = process.argv.slice(3).join(" ");


console.log(toDo, toDoFollow);

var getArtistNames = function(artist) {
    return artist.name;
};



//node liri.js concert-this <artist/band name here>

function concertThis (artist){
console.log("Concert This");
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

console.log(queryUrl);

axios.get(queryUrl)
.then(function (response) {
    console.log(response.data);

    if (!response.data.length) {
        console.log( "No results found for that Artist");
    } else {

        console.log("Here is the upcoming shows for" + artist);
        for (var i = 0; i < response.data.length; i++) {

            var show = response.data[i];

            console.log(
                show.venue.city +
                "," +
                (show.venue.region || show.venue.country) + " at" + 
                show.venue.name + 
                " " + 
                moment(show.datetime).format("MM/DD/YYYY"));

        };
    }
});
};

function spotifyThisSong (songName){
    console.log("spotify is working");
};

function movieThis (movieName){
    console.log("movie is working");
    if (movieName === undefined) {
        movieName = "Mr Nobody";
      }
    
      var movieUrl =
        "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    
      axios.get(movieUrl).then(
        function(response) {
          var movieData = response.data;
    
          console.log("Title: " + movieData.Title);
          console.log("Year: " + movieData.Year);
          console.log("Rated: " + movieData.Rated);
          console.log("IMDB Rating: " + movieData.imdbRating);
          console.log("Country: " + movieData.Country);
          console.log("Language: " + movieData.Language);
          console.log("Plot: " + movieData.Plot);
          console.log("Actors: " + movieData.Actors);
          console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
        }
      );
};

function doWhatItSays () {
    console.log("dowhatitsays is working");
    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
    
        var dataArray = data.split(",");
    
        if (dataArray.length === 2) {
          pick(dataArray[0], dataArray[1]);
        } else if (dataArray.length === 1) {
          pick(dataArray[0]);
        }
      });

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