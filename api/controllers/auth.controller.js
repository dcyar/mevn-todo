const bcryptjs = require('bcryptjs');

const User = require('../models/User');
const generateToken = require('../helpers/generate-jwt');

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

        if (!bcryptjs.compareSync(password, user.password)) throw new Error('Correo o contraseña no válidos.');

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

module.exports = {
    register,
    login,
};
