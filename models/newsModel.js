const
    mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate-v2');

const News = mongoose.Schema({
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
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    archiveDate: {
        type: Date
    }
});

News.plugin(mongoosePaginate);
module.exports = mongoose.model('News', News);