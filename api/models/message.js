const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        author: {
            type: String
        },
        message: {
            type: String
        },
        date: {
            type: String
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('addMsg', messageSchema);
