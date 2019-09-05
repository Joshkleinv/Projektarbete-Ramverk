const userModel = require('../models/user');
const messageModel = require('../models/message');

const saveMessages = (req, res) => {
    messageModel.create({
        author: req.body.author,
        message: req.body.message,
        date: req.body.date
    }, function (err) {
       if (err)
           res.sendStatus(500);
       res.sendStatus(200)
    });
};

const getMessages = (req, res) => {
  messageModel.find({}, (err, messages) => {
      if (err)
          res.sendStatus(500);
      res.send(messages)
  })
};

const getName = async (req, res ) => {
    const user = await userModel.find({ email: req.query.emailAddress }).exec();
    await res.send(user)
};

module.exports = {
    saveMessages: saveMessages,
    getMessages: getMessages,
    getName: getName
};
