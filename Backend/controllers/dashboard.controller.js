const { dashboard_model } = require('../models');

const get_student_info = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const student = await dashboard_model.get_student_info(stu_id);
    student.has_applied = await dashboard_model.has_applied_for_room(stu_id);

    return res.status(200).json(student);
}

const update_student_info = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        console.log(req.body);
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const photo = req.file ? req.file.filename : 'default.webp';
    const { old_pass, new_pass, email, phone_no } = req.body;
    const result = await dashboard_model.update_student_info(stu_id, email, phone_no, old_pass, new_pass, photo);
    if (result.error) {
        return res.status(400).json({
            error: result.error,
        });
    }
    else {
        return res.status(200).json({
            message: 'OK',
        });
    }
}


module.exports = {
    get_student_info,
    update_student_info
}