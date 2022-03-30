const { pool } = require('./postgresql');

class LikesStorage {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }

    async selectLikes(id) {
        const query = `SELECT * FROM posts WHERE fk_user = $1`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }

    async insertLike(userId, postId) {
        const query = `INSERT INTO posts(fk_user, fk_post) VALUES($1, $2) RETURNING *`;
        const data = await this.pool.query(query, [userId, postId]);
        return data.rows[0];
    }

    async deletelike(id) {
        const query = `DELETE FROM posts WHERE id = $1 RETURNING *`;
        const data = await this.pool.query(query, [id]);
        return data.rows[0];
    }
}

module.exports = { LikesStorage };