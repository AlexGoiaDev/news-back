let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');

const New = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    archiveDatge: {
        type: Date
    }
});

New.plugin(mongoosePaginate);
module.exports = mongoose.model('New', New);