const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth_model = require('../models/auth.model');

// every request will go through this middleware
// and check if user has cookie token i.e. logged in
function auth(req, res, next) {
    req.user = null;
    // check if user has cookie token
    if (req.cookies.sessionToken) {
        let token = req.cookies.sessionToken;
        // verify token was made by server
        jwt.verify(token, process.env.APP_SECRET, async (err, decoded) => {
            if (err) {
                console.log("ERROR at verifying token: " + err.message);
                next();
            } else {
                const decodedId = decoded.id;       // id of user
                const decodedRole = decoded.role;   // role of user [for authorization]
                let result = null;
                if (decodedRole === 'admin' || decodedRole === 'staff')
                    result = await auth_model.find_admin_by_id(decodedId, decodedRole);
                else if (decodedRole === 'student')
                    result = await auth_model.find_student_by_id(decodedId);

                if (!result) {
                    console.log('auth: invalid cookie');    // if user is not logged in
                }
                else {
                    console.log(result);
                    // if logged in, add req.user with minimal necessary info
                    // id, name, image is chosen to show in navbar upper right corner
                    // and role is chosen to check authorization
                    // in controllers, req.user is used to get id of user, (NOT req.body.id!)
                    // if req.user is null, then user is not logged in. redirect to login page
                    req.user = {
                        id: decodedId,
                        name: result.name ? result.name : 'admin',
                        photo: result.photo ? result.photo : 'https://www.w3schools.com/howto/img_avatar.png',
                        role: decodedRole
                    }
                }
                next();
            }
        });
    } else {
        // return null req.user
        next();
    }
}

module.exports = {
    auth,
};