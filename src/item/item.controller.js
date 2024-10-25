const itemService = require('./item.service');

 exports.createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const id = await itemService.create(name, description);
        res.status(201).json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await itemService.findOne(id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        await itemService.update(id, name, description);
        res.json({ message: 'Item updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        await itemService.delete(id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await itemService.findAll();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

