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

async function post_menu(date, item_name, meal_time) {
    const sql = `
        INSERT INTO dining_menu ( date, item_name, meal_time, price_per_unit, amount)
        VALUES ($1, $2, $3,20,200)
    `;
    const result = await db_query(sql, [date, item_name, meal_time]);
    return result;
}

module.exports = {
    get_menu_from_date,
    post_menu
}
