const jwt = require('jsonwebtoken');

const generateJWT = (uid) => new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '2m',
    }, (err, token) => {
        if (err) {
            reject(new Error('No se pudo generar el token'));
        }

        resolve(token);
    });
});

module.exports = generateJWT;
