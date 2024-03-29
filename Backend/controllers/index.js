// add controllers
const { auth_controller } = require('./auth.controller');
const { dashboard_controller } = require('./dashboard.controller');
const { complaint_controller } = require('./complaint.controller');
const { dining_controller } = require('./dining.controller');

module.exports = {
    // add controllers (mind the triple dots!)
    ...auth_controller,
    ...dashboard_controller,
    ...complaint_controller,
    ...dining_controller
}