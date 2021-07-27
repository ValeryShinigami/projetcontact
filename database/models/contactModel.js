const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    prenom: {
        type: String,
        required: true,
        length: 20

    },
    age: {
        type: Number,
        min: 18,
        index: true
    },
    email: {
        type: String,
        
    },
    createdAt: Date
});

module.exports  = ContactSchema;