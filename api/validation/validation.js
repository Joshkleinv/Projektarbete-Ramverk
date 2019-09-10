const { check, body } = require('express-validator');

const validateRegistration = [
    check('firstName')
    .isAlpha(['sv-SE']).withMessage('Firstname may only contain letters.')
    .isLength({ min: 3}).withMessage('Firstname must be atleast 3 characters.')
    .not().isEmpty().withMessage('Please enter a firstname.'),
    check('lastName')
    .isAlpha(['sv-SE']).withMessage('Lastname may only contain letters.')
    .isLength({ min: 3}).withMessage('Lastname must be atleast 3 characters.')
    .not().isEmpty().withMessage('Please enter a lastname.'),
    check('emailAddress').isEmail().withMessage('Your email is invalid.'),
    check('password').not().isEmpty().withMessage('Please enter a password.')
]

const validateLogin = [
    check('emailAddress').isEmail().withMessage('Your email is invalid.'),
    check('password').not().isEmpty().withMessage('Please enter a password.')
]

const validateMessage = [
    body('message')
    .not().isEmpty().withMessage('Please enter a message.')
    .trim()
    .escape()
]

module.exports = {
    validateRegistration: validateRegistration,
    validateLogin: validateLogin,
    validateMessage: validateMessage
}