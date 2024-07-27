const { hash, compare } = require('bcryptjs');
const { supabase } = require('../db/connection');

async function create_student(stu_id, name, dept, level_term, phone, email, password, photo, hall, resident, room_no) {
    const { data, error } = await supabase
        .from('student')
        .insert([
            {
                stu_id: stu_id,
                name: name,
                dept: dept,
                level_term: level_term,
                phone_no: phone,
                email: email,
                password: password,
                photo: photo,
                hall: hall,
                resident_status: resident,
                room_no: room_no
            }
        ]);

    if (data) {
        return data;
    }

    return true;
}

async function find_student_by_id(stu_id) {
    const { data, error } = await supabase
        .from('student')
        .select('*')
        .eq('stu_id', stu_id);

    if (error) {
        return error;
    }

    return data[0];
}

async function find_admin_by_id(admin_id, role) {
    const { data, error } = await supabase
        .from('admin')
        .select('*')
        .eq('admin_id', admin_id)
        .eq('role', role);

    if (error) {
        return error;
    }

    return data[0];
}

async function login_student(stu_id, password) {
    const student = await find_student_by_id(stu_id);

    if (!student) return {
        student: null,
        error: 'No student with this id'
    }

    // const isMatch = await compare(password, student.password);
    const isMatch = password == student.password;
    
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
    const admin = await find_admin_by_id(admin_id, 'admin');

    if (!admin) return {
        admin: null,
        error: 'No admin with this id'
    }

    // const isMatch = await compare(password, admin.password);
    const isMatch = password == admin.password;

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
