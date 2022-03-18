const {Router} = require('express');
const router = Router();

const movies = require('../xample.json');

router.get('/', (req, res) => {
    res.json(movies);
});



module.exports = router;