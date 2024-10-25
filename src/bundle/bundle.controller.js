const bundleService = require('./bundle.service');

 exports.createBundle = async (req, res) => {
    const { name, price } = req.body;
    try {
        const id = await bundleService.create(name, price);
        res.status(201).json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBundle = async (req, res) => {
    const { id } = req.params;
    try {
        const bundle = await bundleService.findOne(id);
        if (!bundle) return res.status(404).json({ message: 'Bundle not found' });
        res.json(bundle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBundle = async (req, res) => {
    const { id } = req.params;
    const {name, price } = req.body;
    try {
        await bundleService.update(id, name, price);
        res.json({ message: 'Bundle updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBundle = async (req, res) => {
    const { id } = req.params;
    try {
        await bundleService.delete(id);
        res.json({ message: 'Bundle deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllBundles = async (req, res) => {
    try {
        const bundle = await bundleService.findAll();
        res.json(bundle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

