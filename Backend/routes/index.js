// add routes
const auth_router = require('./auth.route');

const initiateRoutes = (router) => {
    // add routes
    auth_router(router);
}

module.exports = initiateRoutes;