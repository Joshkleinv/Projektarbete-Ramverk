const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    userModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    }, function (err, result) {
        if (err)
            next(err);
        else
            res.json({status: "success", message: "User registered.", data: null});
    });
};

const login = async (req, res) => {
    const user = await userModel.findOne({ email: req.body.emailAdress }).exec();
    if (!user) {
        return res.status(400).send({ message: 'No emailadress found'})
    }
    const checkPassword = await user.checkPassword(req.body.password);
    if (!checkPassword) {
        return res.status(400).send({ message: 'invalid password' })
    }
    return res.status(200).send({ message: 'Successefully signed in'})
};

const isAuthorized = () => {

};

module.exports = {
    register: register,
    login: login,
    isAuthorized: isAuthorized
};
