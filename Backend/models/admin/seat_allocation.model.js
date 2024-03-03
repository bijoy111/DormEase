const { db_query } = require('../../db');

async function get_rooms() {
    sql = `
        SELECT seat_allocation.room_no, seat_allocation.seat_no, student.name, student.stu_id, student.dept, student.level_term
        FROM seat_allocation
        INNER JOIN student ON seat_allocation.stu_id = student.stu_id
        ORDER BY seat_allocation.room_no, seat_allocation.seat_no ASC;
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function get_applicants() {
    const sql = `
        SELECT * FROM applicant JOIN student ON applicant.stu_id = student.stu_id
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function allocate_room(stu_id, room_no, seat_no) {
    const sql = `
        INSERT INTO seat_allocation (room_no, stu_id, seat_no)
        VALUES ($1, $2, $3);

        UPDATE student
        SET resident = true
        WHERE stu_id = $2;
    `;
    const result = await db_query(sql, [room_no, stu_id, seat_no]);

    // delete from applicant table
    const sql2 = `
        DELETE FROM applicant WHERE stu_id = $1
    `;
    await db_query(sql2, [stu_id]);
    return result;
}

async function get_room_change_applicants() {
    const sql = `
        SELECT * FROM applicant_room_change JOIN student ON applicant_room_change.stu_id = student.stu_id
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function allocate_room_change(stu_id, room_no, seat_no, decision) {
    if (decision === 'accept') {
        const sql = `
        UPDATE seat_allocation
        SET room_no = $1, seat_no = $2
        WHERE stu_id = $3
    `;
        const result = await db_query(sql, [room_no, seat_no, stu_id]);
    }

    // delete from applicant table
    const sql2 = `
        DELETE FROM applicant_room_change WHERE stu_id = $1
    `;
    await db_query(sql2, [stu_id]);
}

async function get_room_cancel_applicants() {
    const sql = `
        SELECT * FROM applicant_room_cancel JOIN student ON applicant_room_cancel.stu_id = student.stu_id
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function allocate_room_cancel(stu_id, decision) {
    if (decision === 'accept') {
        const sql = `
        DELETE FROM seat_allocation
        WHERE stu_id = $1
    `;
        const result = await db_query(sql, [stu_id]);
    }

    // delete from applicant table
    const sql2 = `
        DELETE FROM applicant_room_cancel WHERE stu_id = $1
    `;
    await db_query(sql2, [stu_id]);
}

module.exports = {
    get_rooms,
    get_applicants,
    allocate_room,
    get_room_change_applicants,
    allocate_room_change,
    get_room_cancel_applicants,
    allocate_room_cancel
}
