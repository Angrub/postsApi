class PostController {

    constructor(storage) {
        this.storage = storage;
    }

    async getPosts() {
        const posts = await this.storage.selectPosts();
        return posts;
    }
    
    async getPost(req) {
        const { id } = req.params;
        const post = await this.storage.selectPost(id);
        return post;
    } 

    async createPost(req) {
        const { userId, content } = req.body;
        const newPost = await this.storage.insertPost(userId, content);
        return newPost;
    }

    async updatePost(req) {
        const { id } = req.params;
        const { content } = req.body;
        const post = await this.storage.updatePost(id, content);
        return post;
    }

    async deletePost(req) {
        const { id } = req.params;
        const deletedPost = await this.storage.deletePost(id);
        return deletedPost;
    }
}

module.exports = { PostController }