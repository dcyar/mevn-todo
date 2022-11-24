const { Router } = require('express');
const { check, body } = require('express-validator');
const paramsValidation = require('../middlewares/params-validation');
const { all, store, findById } = require('../controllers/project.controller');
const { jwtTokenValidate } = require('../middlewares/token-validate');

const r = Router();

r.get('/', [jwtTokenValidate], all);

r.post(
    '/',
    [
        jwtTokenValidate,
        check('name', 'El nombre el obligatorio.').isString(),
        paramsValidation,
    ],
    store
);

r.get('/:id', [jwtTokenValidate, paramsValidation], findById);

module.exports = r;
