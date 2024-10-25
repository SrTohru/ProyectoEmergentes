const userService = require('./user.service');

exports.createUser = async (req, res) => {
    const { rol, name, email } = req.body;
    try {
        const id = await userService.create(rol, name, email);
        res.status(201).json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.findOne(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { rol, name, email } = req.body;
    try {
        await userService.update(id, rol, name, email);
        res.json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userService.delete(id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
