const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
          type: String,
          required: true
        },
        emailAddress: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamp: true }
);

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) {
        return next()
    }
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    })
});

userSchema.methods.checkPassword = function(candidatePassword) {
    return new Promise(((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatching) => {
            if (err) return reject(err);
            resolve(isMatching)
        })
    }))
};

module.exports = mongoose.model('regUser', userSchema);
