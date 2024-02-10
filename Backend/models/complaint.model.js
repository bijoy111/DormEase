const { db_query } = require('../db');
const fs = require('fs');
const path = require('path');
const { hash, compare } = require('bcryptjs');

async function get_complaints(role, stu_id) {
    if (role == 'student') {
        const sql = `
            SELECT * FROM complaint
            WHERE stu_id = $1
            ORDER BY created_at DESC
        `;
        const result = await db_query(sql, [stu_id]);
        return result;
    }
    else if (role == 'admin') {
        const sql = `
            SELECT * FROM complaint
            ORDER BY created_at DESC
        `;
        const result = await db_query(sql);
        return result;
    }
}

async function post_complaint(stu_id, title, body) {
    const sql = `
        INSERT INTO complaint (stu_id, title, body, stage)
        VALUES ($1, $2, $3, $4)
    `;
    const result = await db_query(sql, [stu_id, title, body, 1]);
    return result;
}

async function get_complaint_stage(complaint_id) {
    const sql = `
        SELECT stage FROM complaint
        WHERE complaint_id = $1
    `;
    const result = await db_query(sql, [complaint_id]);
    if (result.rows.length == 0)
        return null;
    return result.rows[0].stage;
}

async function update_complaint_stage(complaint_id, new_stage) {
    const old_stage = await get_complaint_stage(complaint_id);
    if (!old_stage)
        return { error: 'Not Found' }

    if (old_stage == 3)
        return { error: 'Already Resolved' }

    const sql = `
        UPDATE complaint
        SET stage = $2
        WHERE complaint_id = $1
    `;
    const result = await db_query(sql, [complaint_id, new_stage]);
    return result;
}

async function delete_complaint(complaint_id) {
    const sql = `
        DELETE FROM complaint
        WHERE complaint_id = $1
    `;
    const result = await db_query(sql, [complaint_id]);
    return result;
}

module.exports = {
    get_complaints,
    post_complaint,
    update_complaint_stage,
    delete_complaint
}
