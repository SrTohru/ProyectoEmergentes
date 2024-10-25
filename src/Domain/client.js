const pool = require('../Database/db');

class Client {
    constructor(id = null, name, phone, postingConsent) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.postingConsent = postingConsent;
    }

}
module.exports = Client;
