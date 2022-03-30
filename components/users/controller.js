class UserController {

    constructor(storage) {
        this.storage = storage;
    }

    async getUsers() {
        const users = await this.storage.selectUsers();
        return users;
    }
    
    async getUser(req) {
        const { id } = req.params;
        const user = await this.storage.selectUser(id);
        return user;
    } 

    async createUser(req) {
        const { name, username } = req.body;
        const newUser = await this.storage.insertUser(name, username);
        return newUser;
    }

    async updateUser(req) {
        const { id } = req.params;
        const { name, username } = req.body;
        const user = await this.storage.updateUser(id, {name, username});
        return user;
    }

    async deleteUser(req) {
        const { id } = req.params;
        const deletedUser = await this.storage.deleteUser(id);
        return deletedUser;
    }
}

module.exports = { UserController }