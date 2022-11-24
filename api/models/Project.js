const { Schema, model } = require('mongoose');

const projectSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio.'],
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Todo',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

projectSchema.methods.toJSON = function v() {
    const { __v, _id, ...project } = this.toObject();

    return { uid: _id, ...project };
};

module.exports = model('Project', projectSchema);
