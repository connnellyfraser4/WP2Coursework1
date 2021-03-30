const express = require('express');
const path = require('path');
const app = express();
const Coursework1 = path.join(__dirname, 'Coursework1');
app.use(express.static(Coursework1));
const nedb = require('nedb');
const db = new nedb({filename: 'Activity.db', autoload:true});
const mustache = require('mustache-express');

const bodyParser = require('body-parser');


app.engine('mustache', mustache());
app.set('view engine','mustache');

app.use(bodyParser.urlencoded({extended: false}));


const router = require('./Routes/plannerRoutes');
app.use('/', router);




//initialise database


app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})


