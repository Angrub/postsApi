const { Pool } = require('pg');
const { postgres } = require('../config');

const USER = encodeURIComponent(postgres.user); 
const PASSWORD = encodeURIComponent(postgres.password);
const URI = `postgres://${USER}:${PASSWORD}@${postgres.host}:${postgres.port}/${postgres.database}`;

const pool = new Pool({ connectionString: URI });

module.exports = { pool }