const { auth_model } = require('../models');
const { find_student_by_id } = require('../models/auth.model');
const { loginUser } = require('../utils/auth-utils');

const create_student = async (req, res, next) => {
    // ALWAYS check for authorization
    // req.user is checked always 
    // req.user.role is checked if necessary for special permissions
    if (!req.user || req.user.role !== 'admin') {
        // return res.redirect('/login');
        res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const { stu_id, name, dept, level_term, phone, email, password, cgpa, photo, room_no, hall, resident } = req.body;

    copy = find_student_by_id(stu_id);
    if (copy) {
        res.status(400).json({
            error: 'Student already exists'
        });
    }

    const student = await auth_model.create_student(stu_id, name, dept, level_term, phone, email, password, cgpa, photo, room_no, hall, resident);

    if (!student) {
        res.status(500).json({
            error: 'Could not create student'
        });
        next();
    }
    else {
        res.status(200).json({
            message: 'Student created successfully',
        });
        next();
    }
}

const login = async (req, res, next) => {
    const { id, password } = req.body;
    console.log(req.body);

    if (id >= 1 && id <= 10) {
        const { admin, error } = await auth_model.login_admin(id, password);
        if (error) {
            res.status(401).json({
                error
            });
            next();
        }
        else {
            loginUser(res, admin.admin_id, 'admin');
            res.status(200).json({
                message: 'Admin logged in successfully',
            });
            next();
        }
    }
    else {
        const { student, error } = await auth_model.login_student(id, password);
        if (error) {
            res.status(401).json({
                error
            });
            next();
        }
        else {
            loginUser(res, student.stu_id, 'student');
            res.status(200).json({
                message: 'Student logged in successfully',
            });
            next();
        }
    }
}

module.exports = {
    create_student,
    login,
}