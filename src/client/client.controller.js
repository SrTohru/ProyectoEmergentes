const ClientService = require('./client.service');


class ClientController{

    constructor(){
       this.clientService = new ClientService();
    }

    async createClient (req, res){
        const { name, phone, postingConsent } = req.body;
        try {
            const id = await this.clientService.create(name, phone, postingConsent);
            res.status(201).json({ id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    async getClient(req, res) {
        const { id } = req.params;
        try {
            const client = await this.clientService.findOne(id);
            if (!client) return res.status(404).json({ message: 'client not found' });
            res.json(client);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    async updateClient (req, res){
        const { id } = req.params;
        const {name, phone, postingConsent } = req.body;
        try {
            await this.clientService.update(id, name, phone, postingConsent);
            res.json({ message: 'client updated' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    async deleteClient (req, res) {
        const { id } = req.params;
        try {
            await this.clientService.delete(id);
            res.json({ message: 'client deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    async getAllClient (req, res){
        try {
            const client = await this.clientService.findAll();
            res.json(client);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
}

module.exports = { ClientController }