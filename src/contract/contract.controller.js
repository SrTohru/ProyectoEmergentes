// controller.js
const ContractService = require('./contract.service');

class ContractController {
    constructor() {
        this.contractService = new ContractService();
    }

    async createContract(req, res) {
        const { bundle, cost, nombreFestejado } = req.body;
        try {
            const id = await this.contractService.create(bundle, cost, nombreFestejado);
            res.status(201).json({ id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getContract(req, res) {
        const { id } = req.params;
        try {
            const contract = await this.contractService.findOne(id);
            if (!contract) return res.status(404).json({ message: 'Contract not found' });
            res.json(contract);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateContract(req, res) {
        const { id } = req.params;
        const { bundle, cost, nombreFestejado } = req.body;
        try {
            await this.contractService.update(id, bundle, cost, nombreFestejado);
            res.json({ message: 'Contract updated' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteContract(req, res) {
        const { id } = req.params;
        try {
            await this.contractService.delete(id);
            res.json({ message: 'Contract deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllContracts(req, res) {
        try {
            const contracts = await this.contractService.findAll();
            res.json(contracts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = { ContractController };
