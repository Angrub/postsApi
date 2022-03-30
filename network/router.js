const { Router } = require('express')
const { userRouter } = require('../components/users/network');
const { postRouter } = require('../components/posts/network');
const { likesRouter } = require('../components/likes/network');

function router(app) {
    const router = Router();
    
    router.use('/users', userRouter);
    router.use('/posts', postRouter);
    router.use('/likes', likesRouter);

    app.use('/api/v1', router);
}

module.exports = { router }