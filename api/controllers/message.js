const messageModel = require('../models/message');
const { validationResult } = require('express-validator');

const saveMessages = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    } else {
        messageModel.create({
            author: req.body.author,
            message: req.body.message,
            date: req.body.date
        }, function (err) {
        if (err)
            res.sendStatus(500).res.send(err);
        res.sendStatus(200)
        })
    }
};

const getMessages = (req, res) => {
  messageModel.find({}, (err, messages) => {
      if (err)
          res.sendStatus(500);
      res.send(messages)
  })
};

module.exports = {
    saveMessages: saveMessages,
    getMessages: getMessages
};
