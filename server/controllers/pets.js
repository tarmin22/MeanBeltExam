let Pet = require('mongoose').model('Pet');

let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
        Pet.find().sort({
                kind: -1
            })
            .then(pet => res.json(pet)) // all responses just spit json
            .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
        Pet.findById(req.params.id)
            .then(pet => res.json(pet))
            .catch(errorHandler.bind(res));
    },
    create(req, res) {
        console.log(req.body);
        const newPet = new Pet(req.body);
        Pet.find({
                name: req.body.name
            })
            .then(pet => {
                if (pet.length > 0) {
                    res.json({
                        errors: ["Pet name must be unique"],
                        err: true
                    });
                } else {
                    Pet.create(req.body)
                        .then(pet => res.json(pet))
                        .catch(errorHandler.bind(res));
                }
            })
            .catch(errorHandler.bind(res));
    },

    // create(req, res) {
    //     console.log(req.body);
    //     Pet.create(req.body)
    //         .then(pet => res.json(pet))
    //         .catch(errorHandler.bind(res));
    // },\

    update(req, res) {
        console.log("this is  req.body form data from update in task.js:", req.body);
        Pet.findOne({
                name: req.body.name
            })
            .then(pet => {
                if (pet === null || pet.name === req.body.oldName) {
                    Pet.update({
                            _id: req.params.id
                        }, req.body, {
                            new: true,
                            runValidators: true
                        })
                        .then(pet => {
                            console.log("task data from update successful", pet);
                            res.json(pet);
                        })
                        .catch(errorHandler.bind(res));
                } else {
                    res.json({
                        errors: ["Pet name must be unique"],
                        err: true
                    })
                }
            })
            .catch(errorHandler.bind(res));
    },

    // update(req, res) {
    //     console.log("this is  req.body form data from update in task.js:", req.body);
    //     Pet.update({
    //                 _id: req.params.id
    //             }, req.body,
    //             //  {
    //             //     name: req.body.name,
    //             //     kind: req.body.kind,
    //             //     description: req.body.description,
    //             //     skill1: req.body.skill1,
    //             //     skill2: req.body.skill2,
    //             //     skill3: req.body.skill3,
    //             //     like: req.body.like
    //             // }, 
    //             {
    //                 new: true,
    //                 runValidators: true
    //             })
    //         .then(pet => {
    //             console.log("task data from update successful", pet);
    //             res.json(pet);
    //         })
    //         .catch(errorHandler.bind(res));
    // },

    destroy(req, res) {
        Pet.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },

    // destroy(req, res) {
    //   Task.findByIdAndRemove(req.params.id)
    //     .then(result => res.json(result))
    //     .catch(errorHandler.bind(res));
    // },

    // update(req, res) {
    //     console.log("this is  req.body form data from update in task.js:", req.body);
    //     Author.findByIdAndUpdate(req.params.id, req.body, {
    //                 new: true,
    //                 // runValidators: true
    //             }

    //         )
    //         .then(author => {
    //             console.log("task data from update successful", author);
    //             res.json(author);

    //         })
    //         .catch(errorHandler.bind(res));
    // },
};