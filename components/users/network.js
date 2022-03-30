const router = require('express').Router();
const { UserController } = require('./controller')
const { UserStorage } = require('../../storage/users');
const { CustomError } = require('../../middleware/error_handler/customError');
const { success } = require('../../network/response');
const Storage = new UserStorage(); 
const Controller = new UserController(Storage);

router.get('/', async (req, res, next) => {
    try {
        const users = await Controller.getUsers();
        success(res, users);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await Controller.getUser(req);
        success(res, user);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newUser = await Controller.createUser(req);
        success(res, newUser, 201);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const user = await Controller.updateUser(req);
        success(res, user);
    } catch(error) {
        next(new CustomError(error))
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await Controller.deleteUser(req);
        success(res, user);
    } catch(error) {
        next(new CustomError(error))
    }
});

module.exports = { userRouter: router }