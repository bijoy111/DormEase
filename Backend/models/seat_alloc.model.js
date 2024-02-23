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

module.exports = {
    get_rooms
}