let pets = require('./../controllers/pets'); // controller require
let path = require('path');

module.exports = function (app) {
    app.get('/pets/', pets.index);
    app.get('/pets/:id', pets.show);
    app.post('/pets/', pets.create);
    app.put('/pets/:id', pets.update);
    app.delete('/pets/:id', pets.destroy);




    // app.put('/tasks/:id', tasks.update)
    // app.delete('/tasks/:id', tasks.destroy); // passing in controller methods that take req and res can be done this way


    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};