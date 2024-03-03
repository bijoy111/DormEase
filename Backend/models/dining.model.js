const { db_query } = require('../db');

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

async function get_mess_manager_application() {
    const sql = `
        SELECT * FROM mess_manager_application
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function post_menu(date, item_name, meal_time) {
    const sql = `
        INSERT INTO dining_menu ( date, item_name, meal_time, price_per_unit, amount)
        VALUES ($1, $2, $3,20,200)
    `;
    const result = await db_query(sql, [date, item_name, meal_time]);
    return result;
}

async function apply_mess_manager(stu_id_1, stu_id_2) {
    const sql = `
            INSERT INTO mess_manager_application (stu_id_1, stu_id_2)
            VALUES ($1, $2)
        `;
    const result = await db_query(sql, [stu_id_1, stu_id_2]);
    return result;
}

async function cancel_mess_manager(stu_id_1, stu_id_2) {
    const sql = `
            DELETE FROM mess_manager_application
            WHERE stu_id_1 = $1 AND stu_id_2 = $2
        `;
    const result = await db_query(sql, [stu_id_1, stu_id_2]);
    return result;
}

async function apply_manager(stu_id) {
    const sql = `
            UPDATE student
            SET mess_manager_applied = true
            WHERE stu_id = $1;
        `;

    const result = await db_query(sql, [stu_id]);
    return result;
}

module.exports = {
    get_menu_from_date,
    get_mess_manager_application,
    post_menu,
    apply_mess_manager,
    cancel_mess_manager,
    apply_manager
}
