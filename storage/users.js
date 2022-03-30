const { pool } = require('./postgresql');

class UserStorage {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }

    async selectUsers() {
        const data = await this.pool.query('SELECT * FROM users');
        return data.rows;
    }

    async selectUser(id) {
        const query = `SELECT * FROM users WHERE id = $1`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }

    async insertUser(name, username) {
        const query = `INSERT INTO users(name, username) VALUES($1, $2) RETURNING *`;
        const data = await this.pool.query(query, [name, username]);
        return data.rows[0];
    }

    async updateUser(id, { name, username }) {
        const query = `UPDATE users SET name = $1, username = $2 WHERE id = $3 RETURNING *`;
        const data = await this.pool.query(query, [name, username, id]);
        return data.rows[0];
    }

    async deleteUser(id) {
        const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }
}

module.exports = { UserStorage };