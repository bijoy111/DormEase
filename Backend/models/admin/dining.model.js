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
        INSERT INTO dining_student_entry (stu_id, date, meal_time)
        VALUES ($1, $2, $3)
    `;
    const result = await db_query(sql, [stu_id, date, meal_time]);
    return result;
}

async function get_dining_student_entry(date, meal_time) {
    const sql = `
        SELECT stu_id, level_term FROM student
    `;
    const stu_ids = await db_query(sql);

    result = [];
    for (let i = 0; i < stu_ids.rows.length; i++) {
        const sql = `
            SELECT * FROM dining_student_entry JOIN student ON dining_student_entry.stu_id = student.stu_id
            WHERE student.stu_id = $1 AND date = $2 AND meal_time = $3
        `;
        const res = await db_query(sql, [stu_ids.rows[i].stu_id, date, meal_time]);

        let level_term = stu_ids.rows[i].level_term.split('-');

        if (res.rows.length > 0) {
            result.push({
                stu_id: stu_ids.rows[i].stu_id,
                level: level_term[0],
                term: level_term[1],
                entry: true
            });
        }
        else {
            result.push({
                stu_id: stu_ids.rows[i].stu_id,
                level: level_term[0],
                term: level_term[1],
                entry: false
            });
        }
    }

    return result;
}

async function get_student_monthly_dining_count(month) {
    // for each student for a given month, we need to get the number of times the student has eaten in the dining hall
    // total dates of the current month
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const sql = `
        SELECT s.stu_id, s.name,
        (SELECT COUNT(*) as present_meal_count
         FROM dining_student_entry
         WHERE date_part('MM', date) = $1 AND s.stu_id = stu_id
        )
        FROM student s
    `;
    const result = await db_query(sql, [month]);
    return result.rows;
}

async function get_mess_manager_application() {
    const sql = `
        SELECT * FROM mess_manager_application
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function apply_manager(stu_id) {
    const sql = `
        UPDATE student
        SET mess_manager_applied = true
        WHERE stu_id = $1;
    `;
    const result = await db_query(sql);
    return result.rows;
}

module.exports = {
    get_menu_from_date,
    get_mess_manager,
    add_dining_student_entry,
    get_dining_student_entry,
    get_student_monthly_dining_count,
    get_mess_manager_application,
    apply_manager
}

