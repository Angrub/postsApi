require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV || 'dev',
    api: {
        port: process.env.API_PORT || 3000 
    },
    postgres: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
}