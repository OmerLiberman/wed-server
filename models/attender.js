const {Schema, model} = require('mongoose');

const Attender = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    status: {type: String, required: true},
    attendies: {type: Number},
    recognized: {type: Boolean},
});

module.exports = model('Attender', Attender);