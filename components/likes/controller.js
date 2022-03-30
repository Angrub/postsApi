class LikeController {

    constructor(storage) {
        this.storage = storage;
    }

    async getLikes(req) {
        const { id } = req.params;
        const likes = await this.storage.selectLikes(id);
        return likes;
    }

    async createLike(req) {
        const { userId, content } = req.body;
        const newLike = await this.storage.insertLike(userId, content);
        return newLike;
    }

    async deleteLike(req) {
        const { id } = req.params;
        const deletedLike = await this.storage.deleteLike(id);
        return deletedLike;
    }
}

module.exports = { LikeController }