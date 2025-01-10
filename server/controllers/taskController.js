const Task = require('../models/Task');

//@desc Get all tasks
//@route GET /tasks
//access Public
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//@desc Add a new task to the list
//@route POST /tasks
//access Public
exports.addTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        completed: req.body.completed || false
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//@desc Update a task
//@route PUT /tasks/:id
//access Public
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//@desc Delete a task
//@route DELETE /tasks/:id
//access Public
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}