const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(){
  return this.films.map(film => film.title);
}

// Cinema.prototype.getFilmByTitle = function(title){
//   return this.films.filter(film => film.title === title);
// }
// Cinema.prototype.getFilmsByGenre = function(genre){
//   return this.films.filter(film => film.genre === genre);
// }
// Cinema.prototype.getFilmsByYear = function(year){
//   return this.films.filter(film => film.year === year);
// }
Cinema.prototype.checkNoFilmsByYear = function(year){
  return this.films.every(film => film.year !== year);
}
Cinema.prototype.allFilmsLongerThan = function(time){
  return this.films.every(film => film.length >= time);
}
Cinema.prototype.getTotalRunTime = function(){
  return this.films.reduce((total, film) => total + film.length, 0)
}
Cinema.prototype.getFilmsByProperty = function(property, value){
  return this.films.filter(film => film[property] === value);
}
module.exports = Cinema;
