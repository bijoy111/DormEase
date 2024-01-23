const { dashboard_model } = require('../models');

const get_student_info = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const student = await dashboard_model.get_student_info(stu_id);

    if (!student.photo) {
        student.photo = 'default.webp';
    }

    const { password, ...rest } = student;
    rest.applied_for_room = await dashboard_model.has_applied_for_room(stu_id, student.room_no);

    return res.status(200).json({
        ...rest
    });
}

const get_student_edit_info = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const student = await dashboard_model.get_student_edit_info(stu_id);

    if (!student.photo) {
        student.photo = 'default.webp';
    }

    return res.status(200).json({
        ...student
    });
}

const update_student_edit_info = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const photo = req.file ? req.file : null;
    const { old_password, new_password, email, phone, guardian_name, guardian_phone } = req.body;
    const result = await dashboard_model.update_student_edit_info(stu_id, old_password, new_password, email, phone, photo, guardian_name, guardian_phone);
    if (result.error) {
        old_pass = '';
        new_pass = '';
        return res.status(400).json({
            error: result.error,
            form_data: req.body
        });
    }
    else {
        return res.status(200).json({
            message: 'OK',
        });
    }
}

const apply_for_room = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { home_district, school, college } = req.body;
    const result = await dashboard_model.apply_for_room(stu_id, home_district, school, college);
    return res.status(200).json({
        message: 'OK',
    });
}

const cancel_room_application = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const result = await dashboard_model.cancel_room_application(stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const apply_for_room_change = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { room_no, seat_no, new_room_no, new_seat_no, reason } = req.body;
    const result = await dashboard_model.apply_for_room_change(stu_id, room_no, seat_no, new_room_no, new_seat_no, reason);
    return res.status(200).json({
        message: 'OK',
    });
}

const cancel_room_change_application = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const result = await dashboard_model.cancel_room_change_application(stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const get_vacant_rooms = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const vacant_rooms = await dashboard_model.get_vacant_rooms();

    result = [];
    prev_room_no = -1;
    for (let i = 0; i < vacant_rooms.length; i++) {
        room_no = vacant_rooms[i].room_no;
        if (room_no != prev_room_no) {
            result.push({
                room_no: room_no,
                seats: []
            });
            prev_room_no = room_no;
        }
        result[result.length - 1].seats.push(vacant_rooms[i].seat_no);
    }

    return res.status(200).json({
        vacant_rooms: result
    });
}

module.exports = {
    get_student_info,
    get_student_edit_info,
    update_student_edit_info,
    apply_for_room,
    cancel_room_application,
    get_vacant_rooms,
    apply_for_room_change,
    cancel_room_change_application
}