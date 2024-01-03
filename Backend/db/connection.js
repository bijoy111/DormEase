const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

let pool = null;
// creates connection pool for oracledb
async function db_connect() {
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        ssl: true,
        ssl: {
            rejectUnauthorized: false
        }
    })
    console.log('pool created');
}

// closes connection pool
async function db_disconnect() {
    await pool.end();
    console.log('pool closed');
}

// code to execute sql in postgresql
async function db_query(text, values) {
    const client = await pool.connect();
    try {
        const res = await client.query(text, values);
        return res;
    } catch (err) {
        console.log(err.stack);
    } finally {
        client.release();
    }
}

module.exports = {
    db_connect,
    db_disconnect,
    db_query,
};