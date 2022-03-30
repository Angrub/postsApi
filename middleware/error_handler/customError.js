class CustomError extends Error {
    
    constructor(error, status=500) {
        super(error.message)
        this.status = status;
        this.stack = error.stack;
    }
}

module.exports = { CustomError }