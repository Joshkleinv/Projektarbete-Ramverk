const mongoose = require('mongoose');

const newsModel = new mongoose.Schema(
    {
        author: {
            type: String
        },
        text: {
            type: String
        },
        subject: {
            type: String
        },
        date: {
            type: String
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('addNews', newsModel);
