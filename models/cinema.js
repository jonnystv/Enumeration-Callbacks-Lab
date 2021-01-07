const Cinema = function(films) {
    this.films = films;
};

Cinema.prototype.getListOfTitles = function(filmsList) {
    const result = filmsList.map((film) => {
        return film.title;
    });
    return result;
};

Cinema.prototype.findFilmByTitle = function(filmsList, title) {
    const result = filmsList.filter((film) => {
        return (film.title === title);
    });
    return result;
};

Cinema.prototype.filterFilmsByGenre = function(filmsList, genre) {
    const result = filmsList.filter((film) => {
        return (film.genre === genre);
    });
    return result;
};

Cinema.prototype.checkReleaseYear = function(filmsList, year) {
    const result = filmsList.filter((film) => {
        return (film.year === year);
    });
    return result;
};

Cinema.prototype.checkFilmLength = function(filmsList, length) {
    const result = filmsList.every((film) => {
        return (film.length > length);
    });
    return result;
};

module.exports = Cinema;