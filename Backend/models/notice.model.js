const { db_query } = require('../db');

async function get_notices(stu_id) {
    let notices = [];
    const sql = `
        SELECT post_id FROM notice
    `;
    const noticeIDs = await db_query(sql);

    for (let i = 0; i < noticeIDs.rows.length; i++) {
        let notice = await get_notice(noticeIDs.rows[i].post_id);
        notices.push(notice);
    }

    for (let i = 0; i < notices.length; i++) {
        if (notices[i].is_private && stu_id > 10) {
            let sql = `SELECT * FROM private_notice WHERE post_id = $1 AND stu_id = $2`;
            let result = await db_query(sql, [notices[i].post_id, stu_id]);
            if (result.rows.length === 0) {
                notices.splice(i, 1);
                i--;
            }
        }
    }

    return notices;
}

async function get_notice(post_id) {
    let sql = `
        SELECT * FROM notice JOIN post USING (post_id)
        WHERE post_id = $1
    `;
    const data = await db_query(sql, [post_id]);

    sql = `
        SELECT index, media_type, media_link FROM media JOIN post USING (post_id)
        WHERE post_id = $1
    `;
    const media = await db_query(sql, [post_id]);

    if (data.rows[0].is_private) {
        sql = `
            SELECT stu_id FROM private_notice
            WHERE post_id = $1
        `;
        const students = await db_query(sql, [post_id]);
        data.rows[0].student_list = students.rows;
    }

    return {
        ...data.rows[0],
        media: media.rows
    }
}

async function create_notice(title, text, media, is_private, student_list) {
    let sql = `
        INSERT INTO post(post_id, created_at)
        VALUES (DEFAULT, DEFAULT)
        RETURNING post_id
    `;
    const result = await db_query(sql);
    const post_id = result.rows[0].post_id;

    sql = `
        INSERT INTO notice (post_id, title, text, is_private)
        VALUES ($1, $2, $3, $4)
    `;
    await db_query(sql, [post_id, title, text, is_private]);

    if (media) {
        for (let i = 0; i < media.length; i++) {
            sql = `
                INSERT INTO media (post_id, index, media_type, media_link)
                VALUES ($1, $2, $3, $4)
            `;

            // check media type
            let media_type = 'image';
            if (media[i].endsWith('.pdf') || media[i].endsWith('.doc') || media[i].endsWith('.docx')) {
                media_type = 'document';
            }
            else if (media[i].endsWith('.mp4') || media[i].endsWith('.mkv') || media[i].endsWith('.avi')) {
                media_type = 'video';
            }

            await db_query(sql, [post_id, i, media_type, media[i]]);
        }
    }

    if (is_private) {
        sql = `
            INSERT INTO private_notice (post_id, stu_id)
            VALUES ($1, $2)
        `;
        for (let i = 0; i < student_list.length; i++) {
            await db_query(sql, [post_id, student_list[i]]);
        }
    }
    return result;
}

async function delete_notice(post_id) {
    const sql = `
        DELETE FROM post
        WHERE post_id = $1
    `;
    const result = await db_query(sql, [post_id]);
    return result;
}

async function is_notice_available(post_id) {
    const sql = `
        SELECT * FROM post
        WHERE post_id = $1
    `;
    const result = await db_query(sql, [post_id]);
    return result.rows.length > 0;
}

async function get_media(post_id) {
    const sql = `
        SELECT media_link FROM media
        WHERE post_id = $1
    `;
    const result = await db_query(sql, [post_id]);
    return result.rows;
}

module.exports = {
    get_notices,
    get_notice,
    create_notice,
    delete_notice,
    is_notice_available,
    get_media
}
