
const pool = require('../../Database/db');
const Contract = require('../Domain/contract'); 

class ContractService {
    async create(bundle, cost, nombreFestejado) {
        const [result] = await pool.query(
            'INSERT INTO contracts (bundle, cost, nombreFestejado) VALUES (?, ?, ?)',
            [bundle, cost, nombreFestejado]
        );
        return result.insertId;
    }

    async findOne(id) {
        const [rows] = await pool.query('SELECT * FROM contracts WHERE id = ?', [id]);
        if (rows.length > 0) {
            const { id, bundle, cost, nombreFestejado } = rows[0];
            return new Contract(bundle, cost, nombreFestejado);
        }
        return null;
    }

    async update(id, bundle, cost, nombreFestejado) {
        await pool.query(
            'UPDATE contracts SET bundle = ?, cost = ?, nombreFestejado = ? WHERE id = ?',
            [bundle, cost, nombreFestejado, id]
        );
    }

    async delete(id) {
        await pool.query('DELETE FROM contracts WHERE id = ?', [id]);
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM contracts');
        return rows.map(row => new Contract(row.bundle, row.cost, row.nombreFestejado));
    }
}

module.exports = ContractService;
