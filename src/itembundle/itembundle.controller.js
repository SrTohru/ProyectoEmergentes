const bundleItemService = require('./itembundle.service');

// Asignar un Item a un Bundle
 exports.addItemToBundle = async (req, res) => {
    const { bundleId, itemId, amount } = req.body;
    try {
        const id = await bundleItemService.addItemToBundle(bundleId, itemId, amount);
        res.status(201).json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener los Items de un Bundle
exports.getItemsByBundle = async (req, res) => {
    const { bundleId } = req.params;
    try {
        const items = await bundleItemService.getItemsByBundle(bundleId);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener los Bundles que contienen un Item
exports.getBundlesByItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const bundles = await bundleItemService.getBundlesByItem(itemId);
        res.json(bundles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar un Item de un Bundle
exports.removeItemFromBundle = async (req, res) => {
    const { bundleId, itemId } = req.body;
    try {
        await bundleItemService.removeItemFromBundle(bundleId, itemId);
        res.json({ message: 'Item removed from bundle' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
