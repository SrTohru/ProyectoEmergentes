const pool = require('../Database/db');
const bundle = require('../Entities/bundle');

class BundleService{

     async create(name, price) {
        const [result] = await pool.query(
            'INSERT INTO bundle (name, price) VALUES (?, ?)', [name, price]
        );
        return result.insertId;
    }

     async findOne(id) {
        const [rows] = await pool.query('SELECT * FROM bundle WHERE id = ?', [id]);
        if (rows.length > 0) {
            const { id, name, price } = rows[0];
            return new bundle(id, name, price);
        }
        return null;
    }

     async update(id, name, price) {
        await pool.query(
            'UPDATE bundle SET name = ?, price = ? WHERE id = ?',
            [name, price, id]
        );
    }

     async delete(id) {
        await pool.query('DELETE FROM bundle WHERE id = ?', [id]);
    }

     async findAll() {
        const [rows] = await pool.query('SELECT * FROM bundle');
        return rows.map(row => new bundle(row.id, row.name, row.price));
    }

}

const bundleService = new BundleService();
module.exports = bundleService;