const pool = require('../Database/db');

class ItemService {
    async create(name, description) {
        const [result] = await pool.query(
            'INSERT INTO Item (name, description) VALUES (?, ?)',
            [name, description]
        );
        return result.insertId;
    }

    async findOne(id) {
        const [rows] = await pool.query('SELECT * FROM Item WHERE id = ?', [id]);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    }

    async update(id, name, description) {
        await pool.query(
            'UPDATE Item SET name = ?, description = ? WHERE id = ?',
            [name, description, id]
        );
    }

    async delete(id) {
        await pool.query('DELETE FROM Item WHERE id = ?', [id]);
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Item');
        return rows;
    }
}

module.exports = new ItemService();
