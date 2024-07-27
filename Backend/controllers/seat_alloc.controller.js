const { seat_alloc_model } = require('../models');

//--- student functions ---//

const get_rooms = async (req, res, next) => {
    const result = await seat_alloc_model.get_rooms();
    return res.status(200).json(result);
}

const apply_room_allotment = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { home_district, school, college } = req.body;
    const result = await seat_alloc_model.apply_room_allotment(stu_id, room_no, seat_no, home_district, school, college);
    return res.status(200).json(result);
}

const apply_room_change = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { room_no, seat_no, reason } = req.body;
    const result = await seat_alloc_model.apply_room_change(stu_id, reason, prev_room_no, new_room_no);
    return res.status(200).json(result);
}

const leave_room = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const result = await seat_alloc_model.apply_room_cancel(stu_id);
    return res.status(200).json(result);
}

//--- admin functions ---//

const get_room_allotment_applicants = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const result = await seat_alloc_model.get_room_allotment_applicants();
    return res.status(200).json(result);
}

const get_room_change_applicants = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const result = await seat_alloc_model.get_room_change_applicants();
    return res.status(200).json(result);
}

const approve_room_allotment = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const { stu_id, room_no } = req.body;
    const result = await seat_alloc_model.approve_room_allotment(stu_id, room_no);
    return res.status(200).json(result);
}

const approve_room_change = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const { stu_id, room_no } = req.body;
    const result = await seat_alloc_model.approve_room_change(stu_id, room_no);
    return res.status(200).json(result);
}

const reject_room_allotment = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const { stu_id } = req.body;
    const result = await seat_alloc_model.reject_room_allotment(stu_id);
    return res.status(200).json(result);
}

const reject_room_change = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });

    const { stu_id } = req.body;
    const result = await seat_alloc_model.reject_room_change(stu_id);
    return res.status(200).json(result);
}

module.exports = {
    get_rooms,
    apply_room_allotment,
    apply_room_change,
    leave_room,
    get_room_allotment_applicants,
    get_room_change_applicants,
    approve_room_allotment,
    approve_room_change,
    reject_room_allotment,
    reject_room_change
};