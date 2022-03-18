const {Router} = require('express');
const router = Router();

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

module.exports = router;