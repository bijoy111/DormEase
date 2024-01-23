const { Pool } = require("pg");
const dotenv = require("dotenv");
const { db_user, db_host, db_name, db_pass, db_port} = require("../config/config");
dotenv.config();

let pool = null;
// creates connection pool for oracledb
async function db_connect() {
    pool = new Pool({
        user: db_user,
        host: db_host,
        database: db_name,
        password: db_pass,
        port: db_port,
        ssl: true,
        ssl: {
            rejectUnauthorized: false
        }
    })
    pool = await pool.connect();
    console.log('pool created');
}

// closes connection pool
async function db_disconnect() {
    await pool.end();
    console.log('pool closed');
}

// code to execute sql in postgresql
async function db_query(text, values) {
    try {
        const res = await pool.query(text, values);
        return res;
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    db_connect,
    db_disconnect,
    db_query,
};