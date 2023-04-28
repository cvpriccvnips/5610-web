let movies = [
    {_id: '123', title: 'Aliens', rating: 4.5},
    {_id: '234', title: 'Terminator', rating: 4.8},
    {_id: '345', title: 'Avatar', rating: 4.7}
];
module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    app.get('/api/movies', getAllMovies);

    const deleteMovie = (req, res) => { // handle delete HTTP request
        const id = req.params['mid']; // read mid parameter from the URL
        movies = movies.filter(m => m._id !== id); // filter out movie whose ID is mid
        res.json(movies); // respond with movies with missing deleted movie
    };
    app.delete('/api/movies/:mid', deleteMovie); // invoke handler if delete HTTP request

    const createMovie = (req, res) => { // handler for HTTP POST to '/api/movies' URL
        const movie = req.body; // parse movie from HTTP request's body
        movies = [...movies, movie]; // append movie to end of movies array
        res.json(movies); // respond with movies array
    }
    app.post('/api/movies', createMovie); // listen for HTTP POST to '/api/movies' URL, notify handler
    
};
