let mongoose = require('mongoose');
let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;


const PetSchema = new Schema({
    name: {
        type: String,
        // unique: true,
        required: [true, "Name is required"],
        minlength: [3, "Name must have at least 3 characters!"]
    },
    kind: {
        type: String,
        // unique: true,
        required: [true, "Type is required"],
        minlength: [3, "Type must have at least 3 characters!"]
    },
    description: {
        type: String,
        // unique: true,
        required: [true, "Description is required"],
        minlength: [3, "Description must have at least 3 characters!"]
    },
    skill1: {
        type: String,
        // unique: true,
        default: ""
    },
    skill2: {
        type: String,
        // unique: true,
        default: ""

    },
    skill3: {
        type: String,
        // unique: true,
        default: ""
    },
    like: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

// PetSchema.plugin(uniqueValid, {
//     message: `{PATH} must be unique!`
// });

mongoose.model('Pet', PetSchema);