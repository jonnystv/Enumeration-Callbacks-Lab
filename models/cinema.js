const Cinema = function(films) {
    this.films = films;
};

Cinema.prototype.getListOfTitles = function(filmsList) {
    const result = filmsList.map((film) => {
        return film.title;
    });
    return result;
};

module.exports = Cinema;