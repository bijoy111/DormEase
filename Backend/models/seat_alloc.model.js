const { db_query } = require('../db');

async function get_rooms() {
    sql = `
        SELECT seat_allocation.room_no, seat_allocation.seat_no, student.name, student.stu_id, student.dept, student.level_term
        FROM seat_allocation
        INNER JOIN student ON seat_allocation.stu_id = student.stu_id
        ORDER BY seat_allocation.room_no ASC;
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function apply_room_allotment(stu_id, room_no, seat_no, home_district, school, college) {
    sql = `
        INSERT INTO applicant (stu_id, room_no, seat_no, home_district, school, college)
        VALUES ($1, $2, $3, $4, $5, $6);
    `;
    const result = await db_query(sql, [stu_id, room_no, seat_no, home_district, school, college]);
    return result;
}

async function apply_room_change(stu_id, room_no, seat_no, reason) {
    sql = `
        INSERT INTO applicant_room_change (stu_id, new_room_no, new_seat_no, reason)
        VALUES ($1, $2, $3, $4);
    `;
    const result = await db_query(sql, [stu_id, room_no, seat_no, reason]);
    return result;
}

async function apply_room_cancel(stu_id, reason) {
    sql = `
        INSERT INTO applicant_room_cancel (stu_id, reason)
        VALUES ($1, $2);
    `;
    const result = await db_query(sql, [stu_id, reason]);
    return result;
}

module.exports = {
    get_rooms,
    apply_room_allotment,
    apply_room_change,
    apply_room_cancel
}