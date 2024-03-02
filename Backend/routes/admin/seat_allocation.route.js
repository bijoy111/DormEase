const seat_allocation_controller = require('../../controllers/admin/seat_allocation.controller');

module.exports = (router) => {
  router.get('/seat_allocation', seat_allocation_controller.get_rooms);
  router.get('/seat_allocation/applicants', seat_allocation_controller.get_applicants);
  router.post('/seat_allocation/allocate_room', seat_allocation_controller.allocate_room);
  router.get('/seat_allocation/room_change_applicants', seat_allocation_controller.get_room_change_applicants);
  router.post('/seat_allocation/allocate_room_change', seat_allocation_controller.allocate_room_change);
  router.get('/seat_allocation/room_cancel_applicants', seat_allocation_controller.get_room_cancel_applicants);
  router.post('/seat_allocation/allocate_room_cancel', seat_allocation_controller.allocate_room_cancel);
}
