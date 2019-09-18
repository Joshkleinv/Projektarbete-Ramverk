const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

function createJWT(user) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY );
}

const verifyJWT = token => {
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err) return reject(err);
            resolve(payload)
        })
    }).catch(err => {
        console.log(err)
    });
};

const register = (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    } else {
        userModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            password: req.body.password
        }, function (err) {
            if (err)
                res.sendStatus(500).send({ Error: 'Could not add user'});
            res.sendStatus(200)
        })
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    } else {
        const user = await userModel.findOne({ emailAddress: req.body.emailAddress }).exec();
        if (!user) {
            return res.status(400).send({ Error: 'No email address found'})
        }
        const checkPassword = await user.checkPassword(req.body.password);
        if (!checkPassword) {
            return res.status(400).send({ Error: 'Invalid password' })
        } else {
            const signedJWT = createJWT(user);
            return res.status(200).send({ signedJWT })
        }
    }
};

const isAuthorized = async (req, res, next) => {
    const token = req.headers.authorization;
    let payload;

    try {
        payload = await verifyJWT(token);
    } catch (e) {
        return res.status(500).send({ Error: 'Could not verify jwt token'});
    }
    const user = await userModel.findById(payload.id).exec();
    if (!user) {
        return res.status(500).send({ Error: 'No user found with this id'});
    }
    req.user = user;
    next();
};

const getUser = (req, res) => {
    userModel.findOne({ emailAddress: req.query.email }, (err, user) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send({
                firstName: user.firstName,
                lastName: user.lastName
            });
        }
    })
};

const getUsers = (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) {
            res.sendStatus(500).send({ Error: 'Could not find users'});
        } else {
            res.send(users)
        }
    });
};

module.exports = {
    register: register,
    login: login,
    isAuthorized: isAuthorized,
    getUser: getUser,
    getUsers: getUsers
};
