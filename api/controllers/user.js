const userModel = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtSecret = 'asimplesecret';
function createJWT(user) {
    return jwt.sign({ id: user.id }, jwtSecret);
}

const verifyJWT = token => {
    new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, (err, payload) => {
            if (err) return reject(err);
            resolve(payload)
        })
    });
};

const register = (req, res, next) => {
    userModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    }, function (err, result) {
        if (err)
            res.sendStatus(500);
        res.sendStatus(200)
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
    } else {
        const signedJWT = createJWT(user);
        return res.status(200).send({ signedJWT })
    }
};

const isAuthorized = async (req, res, next) => {
    const token = req.headers.authorization;
    let payload;

    try {
        payload = await verifyJWT(token);
    } catch (e) {
        return res.status(500).end();
    }

    const user = await userModel.findById(payload.id).exec();
    if (!user) {
        return res.status(500).end();
    }
    req.user = user;
    next();
};

const getUser = (req, res ) => {
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


module.exports = {
    register: register,
    login: login,
    isAuthorized: isAuthorized,
    getUser: getUser
};
