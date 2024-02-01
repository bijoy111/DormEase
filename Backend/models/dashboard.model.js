const { db_query } = require('../db');
const fs = require('fs');
const path = require('path');
const { hash, compare } = require('bcryptjs');

async function get_student_info(stu_id) {
    const sql = `
        SELECT * FROM student JOIN seat_allocation USING (stu_id)
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);

    return result.rows[0];
}

async function has_applied_for_room(stu_id, room_no) {
    table = room_no ? 'applicant_room_change' : 'applicant';
    const sql = `
        SELECT * FROM ${table}
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);
    if (result.rows.length == 0) return false;
    return true;
}

async function get_student_edit_info(stu_id) {
    const sql = `
        SELECT email, phone, photo, guardian_name, guardian_phone FROM student
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);
    return result.rows[0];
}

async function update_student_edit_info(stu_id, old_pass, new_pass, email, phone, photo, guardian_name, guardian_phone) {
    if (new_pass) {
        const sql = `
            SELECT password FROM student
            WHERE stu_id = $1
        `;
        const result = await db_query(sql, [stu_id]);
        const isMatch = await compare(old_pass, result.rows[0].password);
        if (!isMatch) return {
            error: 'Incorrect password'
        }

        const hashedPassword = await hash(new_pass, 8);
        sql = `
            UPDATE student
            SET password = $2
            WHERE stu_id = $1
        `;
        result = await db_query(sql, [stu_id, hashedPassword]);
        return result;
    }

    if (photo) {
        sql = `
            SELECT photo FROM student
            WHERE stu_id = $1
        `;
        result = await db_query(sql, [stu_id]);
        if (result.rows[0].photo) {
            photo_path = path.join(__dirname, '../public/' + result.rows[0].photo);
            fs.unlinkSync(photo_path);
        }
    }

    sql = `
        UPDATE student
        SET email = $2, phone = $3, photo = $4, guardian_name = $5, guardian_phone = $6
        WHERE stu_id = $1
    `;
    result = await db_query(sql, [stu_id, email, phone, photo.filename, guardian_name, guardian_phone]);
    return result;
}

async function apply_for_room(stu_id, home_district, school, college) {
    const sql = `
        INSERT INTO applicant (stu_id, home_district, school, college)
        VALUES ($1, $2, $3, $4)
    `;
    const result = await db_query(sql, [stu_id, home_district, school, college]);
    return result;
}

async function cancel_room_application(stu_id) {
    const sql = `
        DELETE FROM applicant
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);
    return result;
}

async function get_vacant_rooms() {
    const sql = `
        SELECT room_no, seat_no FROM seat_allocation
        WHERE stu_id IS NULL
        ORDER BY room_no, seat_no
    `;

    const result = await db_query(sql);
    return result.rows;
}

async function apply_for_room_change(stu_id, room_no, seat_no, new_room_no, new_seat_no, reason) {
    const sql = `
        INSERT INTO applicant_room_change (stu_id, room_no, seat_no, new_room_no, new_seat_no, reason)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const result = await db_query(sql, [stu_id, room_no, seat_no, new_room_no, new_seat_no, reason]);
    return result;
}

async function cancel_room_change_application(stu_id) {
    const sql = `
        DELETE FROM applicant_room_change
        WHERE stu_id = $1
    `;
    const result = await db_query(sql, [stu_id]);
    return result;
}

module.exports = {
    get_student_info,
    has_applied_for_room,
    get_student_edit_info,
    update_student_edit_info,
    apply_for_room,
    cancel_room_application,
    get_vacant_rooms,
    apply_for_room_change,
    cancel_room_change_application
}
