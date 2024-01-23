const dotenv = require("dotenv");
dotenv.config();

const { db_user, db_pass, db_host, db_name, db_port, app_secret } = process.env;

const func = () => {
    console.log(db_user, db_pass, db_host, db_name, db_port, app_secret);
}

module.exports = {
    db_user,
    db_pass,
    db_host,
    db_name,
    db_port,
    app_secret,
    func
}