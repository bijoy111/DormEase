const { db_query } = require('../../db');

async function get_mess_manager_application() {
    const sql = `
        SELECT * FROM applicant
    `;
    const result = await db_query(sql);
    return result.rows;
}

async function approve_mess_manager(stu_id) {
    console.log(stu_id);
    sql = `
        UPDATE student
        SET mess_manager = true
        WHERE stu_id = $1
    `;
    result = await db_query(sql, [stu_id]);

    return result;
}

async function remove_mess_manager(stu_id) {
    sql = `
        UPDATE student
        SET mess_manager = false
        WHERE stu_id = $1
    `;
    result = await db_query(sql, [stu_id]);

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

async function require_manager() {
    let sql = `
        UPDATE mess_manager_application
        SET mess_manager_application = true
    `;
    let result = await db_query(sql);
    console.log(result);
    return result;
}

async function stop_managerApplication() {
    let sql = `
        UPDATE mess_manager_application
        SET mess_manager_application = false
    `;
    let result = await db_query(sql);
    console.log(result);
    return result;
}

module.exports = {
    get_mess_manager_application,
    approve_mess_manager,
    get_students,
    approve_manager,
    delete_manager,
    require_manager,
    stop_managerApplication
}
