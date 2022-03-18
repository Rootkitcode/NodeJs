const express = require('express');
const morgan = require('morgan');
const app= express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//morgan is a middleware that logs the request in the terminal
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
