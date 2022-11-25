const { Router } = require('express');
const { check, body } = require('express-validator');
const paramsValidation = require('../middlewares/params-validation');
const {
    all,
    store,
    findById,
    destroy,
} = require('../controllers/project.controller');
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

r.delete(
    '/:id',
    [jwtTokenValidate, check('id').isMongoId(), paramsValidation],
    destroy
);

module.exports = r;
