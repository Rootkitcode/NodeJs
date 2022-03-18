const {Router} = require('express');
const router = Router();
const underscore = require('underscore');
const movies = require('../xample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const {title, year, genres, raitings} = req.body;
    if (title && year && genres && raitings) {
        const id  = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
       res.json({'message': 'ok, movie saved'});
    }else{
        res.json({'message': 'error, missing data'});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, year, genres, raitings} = req.body;
    if(title && year && genres && raitings){
        underscore.each(movies,(movie, index) => {
            if(movies.id == id){
                movie.title = title;
                movie.year = year;
                movie.genres = genres;
                movie.raitings = raitings;
            }
        });
        res.json({'message': 'ok, movie updated'});
    } else {    
        res.json({'message': 'error, missing data'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    underscore.each(movies, (movie, index) => {
        if(movie.id === parseInt(req.params.id)){
            movies.splice(index, 1);
        }
    });
    res.json({'message': 'ok, movie deleted'});
});

module.exports = router;
