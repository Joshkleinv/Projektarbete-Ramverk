const userModel = require('../models/user');
const messageModel = require('../models/message');

const saveMessageToDB = (req, res, next) => {
    userModel.create({
        author: req.body.author,
        message: req.body.message,
        date: req.body.date
    }, function (err, result) {
        if (err)
            next(err);
        else
            res.json({status: "success", message: "message added to the DB", data: null});
    });
};

const getName = async (req, res ) => {
    const user = await userModel.find({ email: req.query.emailAddress }).exec();
    await res.send(user)
};

module.exports = {
    getName: getName
};