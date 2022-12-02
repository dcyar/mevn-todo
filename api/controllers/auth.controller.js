const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const generateToken = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User({ name, email });

        user.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

        await user.save();

        const token = await generateToken(user.id);

        res.status(201).json({
            user,
            token,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user.google && user.password === 'google') {
            throw new Error('Inicia sesión con tu cuenta de google.');
        }

        if (!bcryptjs.compareSync(password, user.password)) {
            throw new Error('Correo o contraseña no válidos.');
        }

        const token = await generateToken(user.id);

        res.json({
            user,
            token,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

const googleSignin = async (req, res) => {
    const { credential } = req.body;

    try {
        const { name, email, picture } = await googleVerify(credential);

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ name, email, password: 'google', google: true });

            await user.save();
        }

        const token = await generateToken(user.id);

        res.json({ user, token });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

const validateToken = async (req, res) => {
    const { token } = req.body;

    try {
        jwt.verify(token, process.env.JWT_SECRET);

        res.status(204).json();
    } catch (err) {
        res.status(400).json({
            message: 'Token inválido.',
        });
    }
};

module.exports = {
    register,
    login,
    googleSignin,
    validateToken,
};
