const { db_query } = require('../../db');

async function get_mess_manager_application() {
    const sql = `
        SELECT * FROM applicant
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function approve_mess_manager(stu_id_1, stu_id_2) {
    // delete previous mess manager
    let sql = `
        UPDATE student
        SET mess_manager = false
        WHERE mess_manager = true
    `;
    let result = await db_query(sql);

    sql = `
        UPDATE student
        SET mess_manager = true
        WHERE stu_id = $1 OR stu_id = $2
    `;
    result = await db_query(sql, [stu_id_1, stu_id_2]);

    sql = `
        DELETE FROM mess_manager_application
        WHERE 1=1
    `;
    result = await db_query(sql);

    return result;
}


async function approve_manager(stu_id) {
    console.log(stu_id);
    let sql = `
        UPDATE student
        SET mess_manager = true
        WHERE stu_id = $1
    `;
    let result = await db_query(sql, [stu_id]);
    console.log(result);
    return result;
}

async function delete_manager(stu_id) {
    console.log(stu_id);
    let sql = `
        UPDATE student
        SET mess_manager = false
        WHERE stu_id = $1
    `;
    let result = await db_query(sql, [stu_id]);
    console.log(result);
    return result;
}

async function get_students() {
    const sql = `
        SELECT * FROM student
    `;
    const result = await db_query(sql);
    return result.rows;
}

module.exports = {
    get_mess_manager_application,
    approve_mess_manager,
    get_students,
    approve_manager,
    delete_manager
}
