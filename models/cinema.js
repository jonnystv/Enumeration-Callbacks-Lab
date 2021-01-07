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

module.exports = Cinema;