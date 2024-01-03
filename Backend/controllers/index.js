// add controllers
const { auth_controller } = require('./auth.controller');

module.exports = {
    // add controllers (mind the triple dots!)
    ...auth_controller
}