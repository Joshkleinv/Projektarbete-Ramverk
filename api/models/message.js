const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: String
        }
    }
);