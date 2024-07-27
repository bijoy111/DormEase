const { auth_model } = require('../models');
const { loginUser } = require('../utils/auth-utils');

const create_student = async (req, res, next) => {
    // ALWAYS check for authorization
    // req.user is checked always 
    // req.user.role is checked if necessary for special permissions
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const { stu_id, name, dept, level_term, phone, email, password, photo, hall, resident, room_no } = req.body;

    copy = await auth_model.find_student_by_id(stu_id);
    if (copy) {
        return res.status(400).json({
            error: 'User ID already exists'
        });
    }

    const student = await auth_model.create_student(stu_id, name, dept, level_term, phone, email, password, photo, hall, resident, room_no);

    if (!student) {
        console.log('student not created');
        return res.status(500).json({
            error: 'Unsuccessful registration'
        });
    }
    else {
        console.log('student created');
        return res.status(200).json({
            message: 'OK',
        });
    }
}

const login = async (req, res, next) => {
    const { id, password } = req.body;

    if (id < 1000000) {
        const { admin, error } = await auth_model.login_admin(id, password);

        if (error) {
            return res.status(401).json({
                error
            });
        }
        else {
            loginUser(res, admin.admin_id, 'admin');
            console.log('admin logged in');
            return res.status(200).json({
                message: 'OK',
            });
        }
    }
    else {
        const { student, error } = await auth_model.login_student(id, password);
        if (error) {
            return res.status(401).json({
                error
            });
        }
        else {
            loginUser(res, student.stu_id, 'student');
            console.log('student logged in');
            return res.status(200).json({
                message: 'OK',
            });
        }
    }
}

module.exports = {
    create_student,
    login,
}