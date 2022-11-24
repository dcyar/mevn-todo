const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtTokenValidate = (req, res, next) => {
    const token = req.header('token');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    return jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        try {
            if (err) throw new Error('Unauthorized');

            const { uid } = payload;

            const user = await User.findById(uid);

            if (!user) throw new Error('Unauthorized');

            req.user = user;

            next();
        } catch (error) {
            res.status(401).json({
                message: error.message,
            });
        }
    });
};

module.exports = {
    jwtTokenValidate,
};
