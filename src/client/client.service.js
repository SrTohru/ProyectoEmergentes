const pool = require('../../Database/db');
const client = require('../Domain/client/');

class ClientService {

    async create(name, phone, postingConsent) {
        const [result] = await pool.query(
            'INSERT INTO client (name, phone, postingConsent) VALUES (?, ?, ?)',
            [name, phone, postingConsent]
        );
        return result.insertId;
    }

    async findOne(id) {
        const [rows] = await pool.query('SELECT * FROM client WHERE id = ?', [id]);
        if (rows.length > 0) {
            const { id, name, phone, postingConsent } = rows[0];
            return new client(id, name, phone, postingConsent);
        }
        return null;
    }

    async update(id, name, phone, postingConsent) {
        await pool.query(
            'UPDATE client SET name = ?, phone = ?, postingConsent = ? WHERE id = ?',
            [name, phone, postingConsent, id]
        );
    }

    async delete(id) {
        await pool.query('DELETE FROM client WHERE id = ?', [id]);
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM client');
        return rows.map(row => new client(row.id, row.name, row.phone, row.postingConsent));
    }
}


module.exports = ClientService;