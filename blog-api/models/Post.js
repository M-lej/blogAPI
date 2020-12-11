const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Posts', PostSchema);