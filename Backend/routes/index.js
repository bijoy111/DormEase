// add routes
const auth_router = require('./auth.route');
const dashboard_router = require('./dashboard.route');
const notice_router = require('./notice.route');

const initiateRoutes = (router) => {
    // add routes
    auth_router(router);
    dashboard_router(router);
    notice_router(router);
}

module.exports = initiateRoutes;