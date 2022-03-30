const express = require('express');
const config = require('../config'); 
const { router } = require('../network/router');
const { errorHandler } = require('../middleware/error_handler');
const { logError } = require('../middleware/log_error');


const app = express();

app.use(express.json());
router(app);
app.use(logError);
app.use(errorHandler);

app.listen(config.api.port, () => {
    console.log(`server on port ${config.api.port}`)
});