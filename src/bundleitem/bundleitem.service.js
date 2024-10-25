const BundleItem = require('./bundleitem.routes');

class BundleItemService {
    async create(bundleID, itemID) {
        return await BundleItem.create(bundleID, itemID);
    }

    async findOne(id) {
        return await BundleItem.read(id);
    }

    async update(id, bundleID, itemID) {
        return await BundleItem.update(id, bundleID, itemID);
    }

    async delete(id) {
        return await BundleItem.delete(id);
    }

    async findAll() {
        return await BundleItem.findAll();
    }
}

module.exports = new BundleItemService();
