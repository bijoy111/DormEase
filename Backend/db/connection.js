const { Pool } = require("pg");

let pool = null;
// creates connection pool for oracledb
async function db_connect() {
    pool = new Pool({
        user: "postgres",
        host: "dormease-db.chko264kow3g.eu-north-1.rds.amazonaws.com",
        database: "",
        password: "dormease",
        port: 5432,
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