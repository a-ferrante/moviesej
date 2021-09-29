const axios = require('axios')

const MOVIE_API = 'https://api.themoviedb.org/3/search/movie?api_key=b59933e41287ca7e891d95a7a982825c'

function fetchTombRaiderMovies () {
  //get the Tomb Raider movies using the available query param => query
  //use the MOVIE_API and attach the query param to get the expected movies
}


function filterMoreThan5 () {
  //this function should return only the movies that have an vote_average > 5
  //if the list is empty should return an empty array
}

function addYouAsDirector () {
  //for the provided list of movies, add a new property to each one named director and put your name on it
}


function sortByPopularity () {
  //sort the movies by popularity
}


function run() {
  console.log(movies)
}

run()
