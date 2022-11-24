const { Schema, model } = require('mongoose');

const todoSchema = Schema({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio.'],
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
    completedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// todoSchema.methods.toJSON = function v() {
//     const { __v, _id, ...todo } = this.toObject();

//     return { uid: _id, ...todo };
// };

module.exports = model('Todo', todoSchema);
