const { Router } = require('express');
const { check, body } = require('express-validator');
const paramsValidation = require('../middlewares/params-validation');
const { update } = require('../controllers/user.controller');
const { jwtTokenValidate } = require('../middlewares/token-validate');

const r = Router();

r.post(
    '/profile',
    [
        jwtTokenValidate,
        check('name', 'El nombre es obligatorio.').isString(),
        check(
            'old_password',
            'La contraseña anterior es obligatoria.'
        ).isString(),
        check('new_password', 'La nueva contraseña es obligatoria.').isString(),
        check('new_password_confirmation').isString(),
        body('new_password_confirmation')
            .custom((value, { req }) => value === req.body.new_password)
            .withMessage('La confirmación de contraseña debe coincidir.'),
        paramsValidation,
    ],
    update
);

module.exports = r;
