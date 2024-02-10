const { db_query } = require('../db');

async function get_menu_from_date(date) {
    console.log(date);
    const sql = `
        SELECT * FROM dining_menu
        WHERE date = $1
    `;
    const result = await db_query(sql, [date]);
    console.log(result.rows);
    return result.rows;
}

module.exports = {
    get_menu_from_date
}
