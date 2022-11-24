const { Router } = require('express');
const { check } = require('express-validator');
const paramsValidation = require('../middlewares/params-validation');
const { store, update } = require('../controllers/todo.controller');
const { jwtTokenValidate } = require('../middlewares/token-validate');

const r = Router();

r.post(
    '/',
    [
        jwtTokenValidate,
        check('title', 'El titulo el obligatorio.').isString(),
        check('projectId')
            .isMongoId()
            .withMessage('El id de proyecto no es válido.'),
        paramsValidation,
    ],
    store
);

r.patch(
    '/:id',
    [jwtTokenValidate, check('id').isMongoId(), paramsValidation],
    update
);

module.exports = r;
