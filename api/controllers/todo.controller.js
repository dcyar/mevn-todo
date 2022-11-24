const Project = require('../models/Project');
const Todo = require('../models/Todo');

const store = async (req, res) => {
    const { title, projectId } = req.body;

    try {
        const project = await Project.findById(projectId);
        const task = new Todo({ title, project: project.id });

        await task.save();

        project.todos.push(task);

        await project.save();

        res.status(201).json({
            message: 'Tarea agregada correctamente.',
            task,
        });
    } catch (err) {
        let message =
            'Hubo un error al guardar la tarea, inténtalo nuevamente.';

        if (err.code === 11000) {
            message = 'Ya existe una tarea con el mimso título.';
        }

        res.status(400).json({
            message,
        });
    }
};

const update = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Todo.findById(id);

        task.completedAt = task.completedAt ? null : Date.now();

        await task.save();

        res.json(task);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = {
    store,
    update,
};
