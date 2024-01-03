const { db_query } = require('../db');
const { hash, compare } = require('bcryptjs');

// creates a new user
async function create_student(stu_id, name, dept, level_term, phone, email, password, cgpa, photo, room_no, hall, resident) {
    const hashedPassword = await hash(password, 10);
    const sql = `
        INSERT INTO student (stu_id, name, dept, level_term, phone, email, password, cgpa, photo, room_no, hall, resident)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `;
    const result = await db_query(sql, [stu_id, name, dept, level_term, phone, email, hashedPassword, cgpa, photo, room_no, hall, resident]);
    return result;
}

async function find_student_by_id(stu_id) {
    const sql = `
        SELECT * FROM student
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);
    return result.rows[0];
}

async function find_admin_by_id(admin_id, role) {
    const sql = `
        SELECT * FROM admin
        WHERE admin_id = $1
        AND role = $2
    `;
    const result = await db_query(sql, [admin_id, role]);
    return result.rows[0];
}

async function login_student(stu_id, password) {
    const student = await find_student_by_id(stu_id);
    if (!student) return {
        student: null,
        error: 'No student with this id'
    }

    const isMatch = await compare(password, student.password);
    if (!isMatch) return {
        student: null,
        error: 'Incorrect password'
    }

    return {
        student,
        error: null
    }
}

async function login_admin(admin_id, password) {
    const sql = `
        SELECT * FROM admin
        WHERE admin_id = $1
    `;
    const result = await db_query(sql, [admin_id]);
    admin = result.rows[0];

    if (!admin) return {
        admin: null,
        error: 'No admin with this id'
    }

    const isMatch = await compare(password, admin.password);
    if (!isMatch) return {
        admin: null,
        error: 'Incorrect password'
    }

    return {
        admin,
        error: null
    }
}

module.exports = {
    create_student,
    find_student_by_id,
    find_admin_by_id,
    login_student,
    login_admin
}
