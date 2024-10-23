const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'joseeduardo',
    database: 'fotografia'
});

module.exports = pool;
