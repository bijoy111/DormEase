const { seatAlloc_model } = require('../models');

const apply_room_allotment = async (req, res, next) => {
    const { stu_id, room_no, seat_no, home_district, school, college } = req.body;
    const result = await seatAlloc_model.apply_room_allotment(stu_id, room_no, seat_no, home_district, school, college);
    return res.status(200).json(result);
}

const apply_room_change = async (req, res, next) => {
    const { stu_id, room_no, seat_no, reason } = req.body;
    const result = await seatAlloc_model.apply_room_change(stu_id, room_no, seat_no, reason);
    return res.status(200).json(result);
}

const apply_room_cancel = async (req, res, next) => {
    const { stu_id, reason } = req.body;
    const result = await seatAlloc_model.apply_room_cancel(stu_id, reason);
    return res.status(200).json(result);
}

module.exports = {
    apply_room_allotment,
    apply_room_change,
    apply_room_cancel
};