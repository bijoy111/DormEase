const { supabase } = require('../db/connection');

//--- student functions ---//

async function get_rooms() {
    rooms = {};
    for (i = 1; i <= 5; i++) {
        num1 = i * 100;
        num2 = i * 1000;

        for (j = 1; j <= 5; j++) {
            const { data, error } = await supabase
                .from('student')
                .select('*')
                .eq('room_no', num1 + j)
            rooms[num1 + j] = data;

            const { data: data_, error: error_ } = await supabase
                .from('student')
                .select('*')
                .eq('room_no', num2 + j)
            rooms[num2 + j] = data_;
        }
    }
    return rooms;
}

async function apply_room_allotment(stu_id, home_district, school, college) {
    const { data, error } = await supabase
        .from('room_allot_applicant')
        .insert([
            { stu_id: stu_id, home_district: home_district, school: school, college: college }
        ]);
}

async function apply_room_change(stu_id, reason, prev_room_no, new_room_no) {
    const { data, error } = await supabase
        .from('room_change_applicant')
        .insert([
            { stu_id: stu_id, reason: reason, prev_room_no: prev_room_no, new_room_no: new_room_no }
        ]);
}

async function leave_room(stu_id) {
    const { data, error } = await supabase
        .from('student')
        .update({ room_no: null, is_resident: false })
        .eq('stu_id', stu_id)

    if (error) {
        return error;
    }

    return data;
}

//--- admin functions ---//

async function get_room_allotment_applicants() {
    const { data, error } = await supabase
        .from('room_allot_applicant')
        .join('student', { 'room_allot_applicant.stu_id': 'student.stu_id' })
        .select('*')

    return data;
}

async function get_room_change_applicants() {
    const { data, error } = await supabase
        .from('room_change_applicant')
        .join('student', { 'room_change_applicant.stu_id': 'student.stu_id' })
        .select('*')

    return data;
}

async function approve_room_allotment(stu_id, room_no) {
    const { data, error } = await supabase
        .from('student')
        .update({ room_no: room_no, is_resident: true })
        .eq('stu_id', stu_id)

    if (error) {
        return error;
    }

    return data;
}

async function approve_room_change(stu_id, room_no) {
    const { data, error } = await supabase
        .from('student')
        .update({ room_no: room_no })
        .eq('stu_id', stu_id)

    if (error) {
        return error;
    }

    return data;
}

async function reject_room_allotment(stu_id) {
    const { data, error } = await supabase
        .from('room_allot_applicant')
        .delete()
        .eq('stu_id', stu_id)

    if (error) {
        return error;
    }

    return data;
}

async function reject_room_change(stu_id) {
    const { data, error } = await supabase
        .from('room_change_applicant')
        .delete()
        .eq('stu_id', stu_id)

    if (error) {
        return error;
    }

    return data;
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
}