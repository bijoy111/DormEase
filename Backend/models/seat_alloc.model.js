const { db_query } = require('../db');

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
        INSERT INTO applicant_room_change (stu_id, room_no, seat_no, reason)
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
    apply_room_allotment,
    apply_room_change,
    apply_room_cancel
}