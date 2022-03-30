function errorHandler(err, req, res, next) {
    if(err.status >= 500) {
        res.status(err.status).json({
            error: 'Internal server error'
        });

    } else {
        res.status(err.status).json({
            error: err.message,
        });
    }
}

module.exports = { errorHandler }