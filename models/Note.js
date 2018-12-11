let mongoose = require("mongoose");

//Save a reference to the Schema
let Schema = mongoose.Schema;

//Create a NoteSchema object
let NoteSchema = new Schema({

    title: String,
    body: String
});

//Use mongoose model method to create new model
let Note = mongoose.model("Note", NoteSchema);

//Export the model
module.exports = Note;

