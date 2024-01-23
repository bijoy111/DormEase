// add controllers
const { auth_controller } = require('./auth.controller');
const { dashboard_controller } = require('./dashboard.controller');

module.exports = {
    // add controllers (mind the triple dots!)
    ...auth_controller,
    ...dashboard_controller
}