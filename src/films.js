// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director = false, genre = false) {
  
  let selectedMovies = movies;
  
  if(director){ 
    selectedMovies = getMoviesFromDirector(selectedMovies, director); 
  }
  if(genre){ 
    selectedMovies = selectedMovies.filter(movie => movie.genre.includes(genre));
  }

  let score = selectedMovies.reduce((totalScore, movie) => totalScore += movie.score , 0) / selectedMovies.filter(movie => movie.score !== '' ).length; 
  return parseFloat(score.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titles = movies.map(movie => movie.title).sort();
  return titles.length > 20 ? titles.slice(0, 20) : titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  if(!movies.length) return false;
  //¿Por qué no funciona?
  //let moviesByName = movies.sort((a, b) => { a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1 });
  if(movies[0].hasOwnProperty('title')){
    let moviesByName = movies.sort((a, b) => {
      const movie1 = a.title.toUpperCase(); 
      const movie2 = b.title.toUpperCase(); 
      if (movie1 < movie2) {
        return -1;
      }
      if (movie1 > movie2) {
        return 1;
      }
      return 0;
    });
    return moviesByName.sort((a, b) => a.year - b.year);
  }
  return movies.sort((a, b) => a.year - b.year);
 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre = false) {
  return moviesAverageOfDirector(movies, false, genre);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  return movies.map(movie => {
    var temp = Object.assign({}, movie);
    let [hours, minutes] = temp.duration.split(' ')
    temp.duration = (parseFloat(hours ? hours : 0 ) * 60) + parseFloat(minutes ?  minutes : 0);
    return temp;
  });

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  
  let selectedMovies = movies.filter(movie => movie.year === year);
  return selectedMovies.sort((a, b) => b.score - a.score).slice(0, 1);
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
