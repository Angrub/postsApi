const router = require('express').Router();
const { LikeController } = require('./controller')
const { LikesStorage } = require('../../storage/likes');
const { CustomError } = require('../../middleware/error_handler/customError');
const { success } = require('../../network/response');
const Storage = new LikesStorage(); 
const Controller = new LikeController(Storage);

router.get('/:id', async (req, res, next) => {
    try {
        const likes = await Controller.getLikes(req);
        success(res, likes);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newLike = await Controller.createLike(req);
        success(res, newLike, 201);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const like = await Controller.deleteLike(req);
        success(res, like);
    } catch(error) {
        next(new CustomError(error))
    }
});

module.exports = { likesRouter: router }