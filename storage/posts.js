const { pool } = require('./postgresql');

class PostStorage {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }

    async selectPosts() {
        const data = await this.pool.query('SELECT * FROM posts');
        return data.rows;
    }

    async selectPost(id) {
        const query = `SELECT * FROM posts WHERE id = $1`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }

    async insertPost(userId, content) {
        const query = `INSERT INTO posts(fk_user, content) VALUES($1, $2) RETURNING *`;
        const data = await this.pool.query(query, [userId, content]);
        return data.rows[0];
    }

    async updatePost(id, content) {
        const query = `UPDATE posts SET content = $1 WHERE id = $2 RETURNING *`;
        const data = await this.pool.query(query, [content, id]);
        return data.rows[0];
    }

    async deletePost(id) {
        const query = `DELETE FROM posts WHERE id = $1 RETURNING *`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }
}

module.exports = { PostStorage };