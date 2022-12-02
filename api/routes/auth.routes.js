const { Router } = require('express');
const { check, body } = require('express-validator');
const paramsValidation = require('../middlewares/params-validation');
const {
    login,
    googleSignin,
    register,
    validateToken,
} = require('../controllers/auth.controller');
const User = require('../models/User');

const r = Router();

r.post(
    '/register',
    [
        check('name', 'El nombre es requerido.')
            .isString()
            .isLength(3)
            .withMessage('El nombre debe tener al menos 3 caracteres.'),
        check('email', 'El correo es obligatorio.').isEmail(),
        check('email').custom(async (email) => {
            if (await User.findOne({ email })) {
                throw new Error('Ya existe una cuenta con este correo.');
            }
        }),
        check('password', 'La contraseña es obligatoria.')
            .isString()
            .not()
            .isEmpty(),
        check('password_confirmation').isString().not().isEmpty(),
        body('password_confirmation')
            .custom((value, { req }) => value === req.body.password)
            .withMessage('La confirmación de contraseña debe coincidir.'),
        paramsValidation,
    ],
    register
);

r.post(
    '/login',
    [
        check('email', 'El correo es obligatorio.').isEmail(),
        check('email').custom(async (email) => {
            if (!(await User.findOne({ email }))) {
                throw new Error('No existe una cuenta con este correo.');
            }
        }),
        check('password', 'La contraseña es obligatoria.')
            .isString()
            .not()
            .isEmpty(),
        paramsValidation,
    ],
    login
);

r.post(
    '/google/signin',
    [
        check('credential', 'La credencial es requerido.').not().isEmpty(),
        paramsValidation,
    ],
    googleSignin
);

r.post(
    '/validate-token',
    [check('token').not().isEmpty(), paramsValidation],
    validateToken
);

module.exports = r;
