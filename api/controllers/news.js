const newsModel = require('../models/news');

const postNews = (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    } else {
        newsModel.create({
            firstName: req.body.firstName,
            text: req.body.text,
            subject: req.body.subject,
            date: req.body.subject
        }, function (err) {
            if (err)
                res.sendStatus(500);
            res.sendStatus(200)
        })
    }
};

module.exports = {
    postNews: postNews
};
