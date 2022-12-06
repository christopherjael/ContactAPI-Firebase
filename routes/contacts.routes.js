const express = require('express');
const { body } = require('express-validator')
const validator = require('../middlewares/validator')
const router = express.Router();
const {getContactsController, createContactsController} = require('../controllers/contacts.controller')

/* GET users listing. */
router.post('/',
    body('name').not().isEmpty().trim().isString().escape().withMessage({
      errorMessage: 'Name format incorrect'
    }),
    body('lastName').not().isEmpty().trim().isString().escape().withMessage({
      errorMessage: 'Last name format incorrect'
    }),
    body('email').isEmail().normalizeEmail().withMessage({
      errorMessage: 'Email format incorrect'
    }),
    body('phone').isString().withMessage({
      errorMessage: 'phone number format incorrect'
    }),
    validator,
    createContactsController
);

router.get('/', getContactsController);

module.exports = router;
