const newsModel = require('../models/news');

const postNews = (req, res) => {
    newsModel.create({
        author: req.body.author,
        text: req.body.text,
        subject: req.body.subject,
        date: req.body.date
    }, function (err) {
        if (err)
            res.sendStatus(500);
        res.sendStatus(200)
    })
};

module.exports = {
    postNews: postNews
};
