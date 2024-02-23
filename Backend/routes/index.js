// add routes
const auth_router = require('./auth.route');
const dashboard_router = require('./dashboard.route');
const complaint_router = require('./complaint.route');
const notice_router = require('./notice.route');
const dining_router = require('./dining.route');


const feed_router = require('./feed.route');
const seatallocation_router = require('./seatallocation.route');

const initiateRoutes = (router) => {
    // add routes
    auth_router(router);
    dashboard_router(router);
    complaint_router(router);
    notice_router(router);
    dining_router(router);

    feed_router(router);
    seatallocation_router(router);

}

module.exports = initiateRoutes;