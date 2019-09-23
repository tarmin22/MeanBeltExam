// bring in middleware and express
let express = require('express'), // our framework
    parser = require('body-parser'), // parses body
    path = require('path'); // fixes file paths

// create app instance
let app = express();

// load up parser.json to read json posts in req.body
app.use(parser.json())
    .use(parser.urlencoded({
        extended: true
    }));

app.use(express.static(__dirname + '/public/dist/public')); //this line needs to be before the next two line.

require('./server/config/database.js'); // connects database and loads models
require('./server/config/routes.js')(app); // runs the routes function, passes app to routes

// this route will be triggered if any of the routes above did not match


// app.listen
app.listen(8000, function () {
    console.log("Running 8000 yadda yadda")
})