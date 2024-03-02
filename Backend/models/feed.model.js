const { db_query } = require('../db');

async function create_post(stu_id, text, media) {
    let sql = `
        INSERT INTO post(post_id, created_at)
        VALUES (DEFAULT, DEFAULT)
        RETURNING post_id
    `;
    const result = await db_query(sql);
    const post_id = result.rows[0].post_id;

    sql = `
        INSERT INTO status (post_id, stu_id, text)
        VALUES ($1, $2, $3)
    `;
    await db_query(sql, [post_id, stu_id, text]);

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

    return result;
}

async function post_auth(post_id, stu_id) {
    const sql = `
        SELECT * FROM status
        WHERE post_id = $1 AND stu_id = $2
    `;
    const result = await db_query(sql, [post_id, stu_id]);
    return result.rows.length > 0;
}

async function delete_post(post_id, stu_id) {
    // check if the post is created by the student
    if (!post_auth(post_id, stu_id)) {
        console.log('Unauthorized');
        return {
            error: 'Unauthorized'
        };
    }

    sql = `
        DELETE FROM post
        WHERE post_id = $1
    `;
    const result = await db_query(sql, [post_id]);
    return result;
}

async function comment(parent_id, stu_id, text, media) {
    let sql = `
        INSERT INTO post(post_id, created_at)
        VALUES (DEFAULT, DEFAULT)
        RETURNING post_id
    `;
    const result = await db_query(sql);
    const post_id = result.rows[0].post_id;

    sql = `
        INSERT INTO comment (post_id, stu_id, parent_id, text)
        VALUES ($1, $2, $3, $4)
    `;
    await db_query(sql, [post_id, stu_id, parent_id, text]);

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

    return result;
}

async function upvote(post_id, stu_id) {
    const updateSql = `
            UPDATE upvote
            SET upvoted = true
            WHERE post_id = $1 AND stu_id = $2 AND upvoted = false
        `;
    let updateResult = await db_query(updateSql, [post_id, stu_id]);
    if (updateResult.rowCount === 0) {
        const insertSql = `
                INSERT INTO upvote (post_id, stu_id, upvoted)
                VALUES ($1, $2, true)
            `;
        updateResult = await db_query(insertSql, [post_id, stu_id]);
    }

    return updateResult;
    // console.log(post_id, stu_id);
    // const sql = `
    //     INSERT INTO upvote (post_id, stu_id, upvoted)
    //     VALUES ($1, $2, true)
    // `;
    // const result = await db_query(sql, [post_id, stu_id]);
    // console.log('bijoy');
    // console.log(result);
    // return result;
}

async function cancel_upvote(post_id, stu_id) {
    const sql = `
        DELETE FROM upvote
        WHERE post_id = $1 AND stu_id = $2
    `;
    const result = await db_query(sql, [post_id, stu_id]);
    return result;
}

async function downvote(post_id, stu_id) {
    const updateSql = `
            UPDATE upvote
            SET upvoted = false
            WHERE post_id = $1 AND stu_id = $2 AND upvoted = true
        `;
    let updateResult = await db_query(updateSql, [post_id, stu_id]);
    if (updateResult.rowCount === 0) {
        const insertSql = `
                INSERT INTO upvote (post_id, stu_id, upvoted)
                VALUES ($1, $2, false)
            `;
        updateResult = await db_query(insertSql, [post_id, stu_id]);
    }

    return updateResult;

    // console.log(post_id, stu_id);
    // const sql = `
    //     INSERT INTO upvote (post_id, stu_id, upvoted)
    //     VALUES ($1, $2, false)
    // `;
    // const result = await db_query(sql, [post_id, stu_id]);
    // return result;
}

async function cancel_downvote(post_id, stu_id) {
    const sql = `
        DELETE FROM upvote
        WHERE post_id = $1 AND stu_id = $2
    `;
    const result = await db_query(sql, [post_id, stu_id]);
    return result;
}

async function get_feed() {
    sql = `
        SELECT post.post_id, student.stu_id, name, created_at, text
         FROM post JOIN status ON post.post_id = status.post_id JOIN student ON status.stu_id = student.stu_id
        ORDER BY created_at DESC
    `;
    const result = await db_query(sql);

    // get comments
    for (let i = 0; i < result.rows.length; i++) {
        sql = `
            SELECT post.post_id, student.stu_id, name, created_at, text
            FROM post JOIN comment ON post.post_id = comment.post_id JOIN student ON comment.stu_id = student.stu_id
            WHERE parent_id = $1
            ORDER BY created_at DESC
        `;
        const comments = await db_query(sql, [result.rows[i].post_id]);
        result.rows[i].comments = comments.rows;
    }

    // get upvote and downvote count
    for (let i = 0; i < result.rows.length; i++) {
        sql = `
            SELECT COUNT(*)
            FROM upvote
            WHERE post_id = $1 AND upvoted = true
        `;
        const upvote = await db_query(sql, [result.rows[i].post_id]);
        result.rows[i].upvote = upvote.rows[0].count;

        sql = `
            SELECT COUNT(*)
            FROM upvote
            WHERE post_id = $1 AND upvoted = false
        `;
        const downvote = await db_query(sql, [result.rows[i].post_id]);
        result.rows[i].downvote = downvote.rows[0].count;
    }

    // check if user has upvoted or downvoted
    for (let i = 0; i < result.rows.length; i++) {
        sql = `
            SELECT upvoted
            FROM upvote
            WHERE post_id = $1 AND stu_id = $2
        `;
        const upvoted = await db_query(sql, [result.rows[i].post_id, result.rows[i].stu_id]);
        if (upvoted.rows.length > 0) {
            result.rows[i].upvoted = upvoted.rows[0].upvoted;
        }
        else {
            result.rows[i].upvoted = null;
        }
    }

    return result.rows;
}

module.exports = {
    create_post,
    delete_post,
    comment,
    upvote,
    cancel_upvote,
    downvote,
    cancel_downvote,
    get_feed
}
