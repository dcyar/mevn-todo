const Project = require('../models/Project');
const Todo = require('../models/Todo');
const User = require('../models/User');

const all = async (req, res) => {
    const projects = await Project.find({ user: req.user.id });

    res.json({
        projects,
    });
};

const store = async (req, res) => {
    const { name } = req.body;

    try {
        const user = await User.findById(req.user.id);
        const project = new Project({ name, user: req.user.id });

        user.projects.push(project);

        await user.save();
        await project.save();

        res.status(201).json({
            message: 'Proyecto guardado correctamente',
            project,
        });
    } catch (err) {
        let message =
            'Hubo un error al guardar el proyecto, inténtalo nuevamente.';

        if (err.code === 11000) {
            message = 'Ya existe un proyecto con el mimso nombre.';
        }

        res.status(400).json({
            message,
        });
    }
};

const findById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id).populate('todos');

        res.json(project);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = {
    all,
    store,
    findById,
};
