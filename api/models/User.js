const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido.'],
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido.'],
        unique: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida.'],
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project',
        },
    ],
});

userSchema.methods.toJSON = function v() {
    const { __v, password, _id, ...user } = this.toObject();

    return { uid: _id, ...user };
};

module.exports = model('User', userSchema);
