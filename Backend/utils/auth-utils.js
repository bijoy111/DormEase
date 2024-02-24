const jwt = require('jsonwebtoken');
require('dotenv').config();

// creates a cookie with token
// this cookie is used in auth.js middleware
async function loginUser(res, userId, role) {
    console.log('loginadmin');
    const payload = {
        id: userId,     // id of user
        role: role      // role of user (student, admin, staff)[for authorization]
    };
    let token = jwt.sign(payload, process.env.APP_SECRET);
    let options = {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
    res.cookie('sessionToken', token, options);
}

async function logoutUser(res, userId) {
    res.clearCookie('sessionToken');
}

module.exports = {
    loginUser,
    logoutUser
}