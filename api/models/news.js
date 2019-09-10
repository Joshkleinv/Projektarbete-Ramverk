const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        author: {
            type: String
        },
        text: {
            type: String
        },
        subject: {
            type: String
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('addNews', newsSchema);
