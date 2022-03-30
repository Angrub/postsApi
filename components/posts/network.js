const router = require('express').Router();
const { PostController } = require('./controller')
const { PostStorage } = require('../../storage/posts');
const { CustomError } = require('../../middleware/error_handler/customError');
const { success } = require('../../network/response');
const Storage = new PostStorage(); 
const Controller = new PostController(Storage);

router.get('/', async (req, res, next) => {
    try {
        const posts = await Controller.getPosts();
        success(res, posts);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Controller.getPost(req);
        success(res, post);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newPost = await Controller.createPost(req);
        success(res, newPost, 201);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const post = await Controller.updatePost(req);
        success(res, post);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Controller.deletePost(req);
        success(res, post);
    } catch(error) {
        next(new CustomError(error))
    }
});

module.exports = { postRouter: router }