const bcryptjs = require('bcryptjs');

const User = require('../models/User');

const update = async (req, res) => {
    const { name, old_password, new_password, new_password_confirmation } =
        req.body;

    try {
        const user = await User.findById(req.user.id);

        if (name !== user.name) user.name = name;

        if (old_password.length > 0 && new_password.length > 0) {
            if (!bcryptjs.compareSync(old_password, user.password)) {
                throw new Error('Contraseña no válida.');
            }

            user.password = bcryptjs.hashSync(
                new_password,
                bcryptjs.genSaltSync(10)
            );
        }

        if (
            user.google &&
            user.password === 'google' &&
            new_password.length > 0
        ) {
            user.password = bcryptjs.hashSync(
                new_password,
                bcryptjs.genSaltSync(10)
            );
        }

        await user.save();

        res.json({
            user,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = {
    update,
};
