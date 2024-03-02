const { db_query } = require('../../db');

async function get_menu_from_date(date) {
    // console.log(date);
    const sql = `
        SELECT * FROM dining_menu
        WHERE date = $1
    `;
    const result = await db_query(sql, [date]);
    // console.log(result.rows);
    return result.rows;
}

async function get_mess_manager() {
    const sql = `
        SELECT * FROM student
        WHERE mess_manager = true
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function add_dining_student_entry(stu_id, date, meal_time) {
    const sql = `
        INSERT INTO student_dining_entry (stu_id, date, meal_time)
        VALUES ($1, $2, $3)
    `;
    const result = await db_query(sql, [stu_id, date, meal_time]);
    return result;
}

async function get_dining_student_entry(stu_id, date) {
    const sql = `
        SELECT * FROM student_dining_entry
        WHERE stu_id = $1 AND date = $2
    `;
    const result = await db_query(sql, [stu_id, date]);
    return result.rows;
}

async function get_student_monthly_dining_count(month) {
    // for each student for a given month, we need to get the number of times the student has eaten in the dining hall
    const sql = `
        SELECT COUNT(*) FROM student_dining_entry
        WHERE date_part('month', date) = $2
        GROUP BY stu_id
    `;
    const result = await db_query(sql, [month]);
    return result.rows;
}

module.exports = {
    get_menu_from_date,
    get_mess_manager,
    add_dining_student_entry,
    get_dining_student_entry,
    get_student_monthly_dining_count
}

