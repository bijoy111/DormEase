const { supabase } = require('../db/connection');

async function get_notices(id) {
    let noticeIDs = [];

    const { data: public_notice, error } = await supabase
        .from('notice')
        .select('notice_id')
        .eq('is_private', false);
    noticeIDs.push(...public_notice);

    const { data: private_notice, error_ } = await supabase
        .from('private_notice')
        .select('notice_id')
        .eq('stu_id', id);
    noticeIDs.push(...private_notice);

    // for admin
    if (id < 1000000) {
        const { data: private_notice_, error__ } = await supabase
            .from('notice')
            .select('notice_id')
            .eq('is_private', true);
        noticeIDs.push(...private_notice_);
    }

    let notices = [];
    for (let i = 0; i < noticeIDs.length; i++) {
        let notice = await get_notice(noticeIDs[i].notice_id);
        notices.push(notice);
    }

    // sort notices by date
    notices.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });

    return notices;
}

async function get_notice(post_id) {
    const { data: notice_post, error } = await supabase
        .from('post')
        .select('*, notice(*), private_notice(*, student(stu_id, name, photo)))')
        .eq('post_id', post_id)
        .single();
    
    notice_post.is_private = notice_post.notice[0].is_private;
    notice_post.students = notice_post.private_notice.map(pn => pn.student);
    delete notice_post.notice;
    delete notice_post.private_notice;

    if (error) {
        return error;
    }

    const pid = notice_post.post_id;

    const { data, error_ } = await supabase
        .from('media')
        .select('link')
        .eq('post_id', pid);

    notice_post.media = data.map(m => m.link);

    return notice_post;
}

async function create_notice(title, text, media, is_private, student_list) {
    const { data, error } = await supabase
        .from('post')
        .insert([
            { title: title, description: text }
        ])
        .select('post_id')
        .single();

    const post_id = data.post_id;

    if (!is_private) {
        const { data, error } = await supabase
            .from('notice')
            .insert([
                { notice_id: post_id, is_private: false }
            ]);
    }
    else {
        const { data, error } = await supabase
            .from('notice')
            .insert([
                { notice_id: post_id, is_private: true }
            ]);

        for (let i = 0; i < student_list.length; i++) {
            const { data, error } = await supabase
                .from('private_notice')
                .insert([
                    { notice_id: post_id, stu_id: student_list[i] }
                ]);
        }
    }

    if (media) {
        for (let i = 0; i < media.length; i++) {
            const { data, error } = await supabase
                .from('media')
                .insert([
                    { post_id: post_id, link: media[i] }
                ]);
        }
    }
}

async function delete_notice(post_id) {
    const { data, error } = await supabase
        .from('post')
        .delete()
        .eq('post_id', post_id);

    if (error) {
        return error;
    }

    return { message: 'OK' };
}

async function is_notice_available(post_id) {
    const { data, error } = await supabase
        .from('notice')
        .select('post_id')
        .eq('post_id', post_id);

    if (error) {
        return error;
    }

    if (data.length > 0) {
        return true;
    }
    return false;
}

module.exports = {
    get_notices,
    get_notice,
    create_notice,
    delete_notice,
    is_notice_available
}
