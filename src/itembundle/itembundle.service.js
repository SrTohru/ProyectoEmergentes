const pool = require('../Database/db');

class BundleItemService {
    async addItemToBundle(bundleId, itemId, amount) {
        const [result] = await pool.query(
            'INSERT INTO BundleItem (bundleId, itemId, amount) VALUES (?, ?, ?)',
            [bundleId, itemId, amount]
        );
        return result.insertId;
    }

    async getItemsByBundle(bundleId) {
        const [rows] = await pool.query(
            `SELECT i.id, i.name, i.description, bi.amount
             FROM Item i
             JOIN BundleItem bi ON i.id = bi.itemId
             WHERE bi.bundleId = ?`,
            [bundleId]
        );
        return rows;
    }

    async getBundlesByItem(itemId) {
        const [rows] = await pool.query(
            `SELECT b.id, b.name, b.price, bi.amount
             FROM Bundle b
             JOIN BundleItem bi ON b.id = bi.bundleId
             WHERE bi.itemId = ?`,
            [itemId]
        );
        return rows;
    }

    async removeItemFromBundle(bundleId, itemId) {
        await pool.query('DELETE FROM BundleItem WHERE bundleId = ? AND itemId = ?', [bundleId, itemId]);
    }

}

module.exports = new BundleItemService();
