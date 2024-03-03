const { seatAlloc_model } = require('../models');

const get_rooms = async (req, res, next) => {
    const result = await seatAlloc_model.get_rooms();
    return res.status(200).json(result);
}

const apply_room_allotment = async (req, res, next) => {
    const stu_id = req.user.id;
    const { room_no, seat_no, home_district, school, college } = req.body;
    console.log(school, college);
    const result = await seatAlloc_model.apply_room_allotment(stu_id, room_no, seat_no, home_district, school, college);
    console.log(res.status);
    return res.status(200).json(result);
}

const apply_room_change = async (req, res, next) => {
    const stu_id = req.user.id;
    const { room_no, seat_no, reason } = req.body;
    const result = await seatAlloc_model.apply_room_change(stu_id, room_no, seat_no, reason);
    return res.status(200).json(result);
}

const apply_room_cancel = async (req, res, next) => {
    const stu_id = req.user.id;
    const { reason } = req.body;
    const result = await seatAlloc_model.apply_room_cancel(stu_id, reason);
    return res.status(200).json(result);
}

module.exports = {
    get_rooms,
    apply_room_allotment,
    apply_room_change,
    apply_room_cancel
};