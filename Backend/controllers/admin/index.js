// add controllers
const mess_manager_controller = require('./mess_manager.controller');
const seat_allocation_controller = require('./seat_allocation.controller');
const admin_dining_controller = require('./dining.controller');

module.exports = {
    mess_manager_controller,
    seat_allocation_controller,
    admin_dining_controller
}