const { supabase } = require('../db/connection');


// const path = require('path');
// const { hash, compare } = require('bcryptjs');

async function get_student_info(stu_id) {
    const { data, error } = await supabase
        .from('student')
        .select('stu_id, name, email, dept, level_term, phone_no, photo, room_no, hall, resident_status')
        .eq('stu_id', stu_id)
        .single();

    if (error) {
        return error;
    }

    return data;
}

async function update_student_info(stu_id, email, phone_no, old_pass, new_pass, photo) {
    if (new_pass) {
        const { data: student, error: err } = await supabase
            .from('student')
            .select('*')
            .eq('stu_id', stu_id)
            .eq('password', old_pass)
            .single();

        if (err) {
            return { error: 'wrong password' };
        }

        // update password
        const { data, error } = await supabase
            .from('student')
            .update([
                {
                    password: new_pass
                }
            ])
            .eq('stu_id', stu_id);
    }

    const { data, error } = await supabase
        .from('student')
        .update([
            {
                email: email,
                phone_no: phone_no,
                photo: photo
            }
        ])
        .eq('stu_id', stu_id);

    return { message: 'OK' };
}

async function has_applied_for_room(stu_id) {
    // check if student is resident
    const { data: student, error: err } = await supabase
        .from('student')
        .select('resident_status')
        .eq('stu_id', stu_id)
        .single();

    table = student.resident_status ? 'room_change_applicant' : 'room_allot_applicant';
    const { data, error } = await supabase
        .from(table)
        .select('stu_id')
        .eq('stu_id', stu_id)
        .single();

    return data ? true : false;
}

module.exports = {
    get_student_info,
    update_student_info,
    has_applied_for_room
}