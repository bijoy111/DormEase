const { get_rooms,
    apply_room_allotment,
    apply_room_change,
    leave_room,
    get_room_allotment_applicants,
    get_room_change_applicants,
    approve_room_allotment,
    approve_room_change,
    reject_room_allotment,
    reject_room_change
} = require('../controllers/seat_alloc.controller');

module.exports = (router) => {
    router.get('/rooms', get_rooms);
    router.post('/rooms/apply', apply_room_allotment);
    router.post('/rooms/change', apply_room_change);
    router.post('/rooms/leave', leave_room);
    router.get('/room/allotment/applicants', get_room_allotment_applicants);
    router.get('/rooms/change/applicants', get_room_change_applicants);
    router.post('/rooms/allotment/approve', approve_room_allotment);
    router.post('/rooms/change/approve', approve_room_change);
    router.post('/rooms/allotment/reject', reject_room_allotment);
    router.post('/rooms/change/reject', reject_room_change);
}