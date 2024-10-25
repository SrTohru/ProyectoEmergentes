const User = require('./user.model');

class UserService {
    async create(rol, name, email) {
        return await User.create(rol, name, email);
    }

    async findOne(id) {
        return await User.read(id);
    }

    async update(id, rol, name, email) {
        return await User.update(id, rol, name, email);
    }

    async delete(id) {
        return await User.delete(id);
    }

    async findAll() {
        return await User.findAll();
    }
}

module.exports = new UserService();
