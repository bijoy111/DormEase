const { supabase } = require('../db/connection');

async function create_post(stu_id, title, description, media) {
    const { data, error } = await supabase
        .from('post')
        .insert([
            { title: title, description: description }
        ])
        .select('post_id')
        .single();

    pid = data.post_id;

    const { statusText } = await supabase
        .from('student_post')
        .insert([
            { post_id: pid, stu_id: stu_id }
        ]);

    if (media) {
        for (let i = 0; i < media.length; i++) {
            const data = await supabase
                .from('media')
                .insert([
                    { post_id: pid, link: media[i] }
                ]);
        }
    }

    return data;
}

async function post_auth(post_id, stu_id) {
    const { data, error } = await supabase
        .from('student_post')
        .select('*')
        .eq('post_id', post_id)
        .eq('stu_id', stu_id);

    if (error) {
        return false;
    }

    if (data.length > 0) {
        return true;
    }
    return false;
}

async function edit_post(post_id, stu_id, title, description, media) {
    // check if the post is created by the student
    if (!post_auth(post_id, stu_id)) {
        console.log('Unauthorized');
        return {
            error: 'Unauthorized'
        };
    }

    const { data, error } = await supabase
        .from('post')
        .update({ title: title, description: description })
        .eq('post_id', post_id);

    if (error) {
        return error;
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

    return { message: 'OK' };
}

async function delete_post(post_id, stu_id) {
    // check if the post is created by the student
    if (!post_auth(post_id, stu_id)) {
        console.log('Unauthorized');
        return {
            error: 'Unauthorized'
        };
    }

    const { data, error } = await supabase
        .from('post')
        .delete()
        .eq('post_id', post_id);

    if (error) {
        return error;
    }

    return { message: 'OK' };
}

async function comment(post_id, stu_id, text) {
    const { data, error } = await supabase
        .from('comment')
        .insert([
            { post_id: post_id, stu_id: stu_id, description: text }
        ]);

    if (error) {
        return error;
    }

    return data;
}

async function delete_comment(comment_id, stu_id) {
    // check if the comment is created by the student
    console.log(comment_id, stu_id);
    const { data: comment, error_ } = await supabase
        .from('comment')
        .select('*')
        .eq('comment_id', comment_id)
        .eq('stu_id', stu_id)
        .single();

    if (!comment) {
        return {
            error: 'Unauthorized'
        };
    }

    const { data, error } = await supabase
        .from('comment')
        .delete()
        .eq('comment_id', comment_id)
        .eq('stu_id', stu_id);

    if (error) {
        return error;
    }

    return { message: 'OK' };
}

async function vote(post_id, stu_id, value) {
    // check if user already voted before. if true, update vote to value
    const { data: opposite_vote, error: error_ } = await supabase
        .from('post_vote')
        .select('*')
        .eq('post_id', post_id)
        .eq('stu_id', stu_id)
        .eq('vote', !value)
        .single();

    if (opposite_vote) {
        const { data, error } = await supabase
            .from('post_vote')
            .update({ vote: value })
            .eq('post_id', post_id)
            .eq('stu_id', stu_id)

        if (error) {
            return error;
        }

        return data;
    }

    const { data, error } = await supabase
        .from('post_vote')
        .insert([
            { post_id: post_id, stu_id: stu_id, vote: value }
        ]);

    if (error) {
        return error;
    }

    return data;
}


async function cancel_upvote(post_id, stu_id, value = true) {
    const { data, error } = await supabase
        .from('post_vote')
        .delete()
        .eq('post_id', post_id)
        .eq('stu_id', stu_id)
        .eq('vote', value);

    if (error) {
        return error;
    }

    return data;
}

async function cancel_downvote(post_id, stu_id) {
    cancel_upvote(post_id, stu_id, false);
}

async function get_feed(stu_id) {
    const { data: postIDs, error_ } = await supabase
        .from('student_post')
        .select('post_id, student (stu_id, name, photo)')


    for (let i = 0; i < postIDs.length; i++) {
        const { data: post, error } = await supabase
            .from('post')
            .select('*')
            .eq('post_id', postIDs[i].post_id)
            .single();

        postIDs[i].title = post.title;
        postIDs[i].description = post.description;
        postIDs[i].created_at = post.created_at;
    }

    let posts = postIDs;

    for (let i = 0; i < posts.length; i++) {
        const { data: media, error } = await supabase
            .from('media')
            .select('link')
            .eq('post_id', posts[i].post_id);
        posts[i].media = media.map(m => m.link);

        const { data: comments, error_ } = await supabase
            .from('comment')
            .select('*, student (stu_id, name, photo)')
            .eq('post_id', posts[i].post_id);
        posts[i].comments = comments;

        const { data: votes, error__ } = await supabase
            .from('post_vote')
            .select('*')
            .eq('post_id', posts[i].post_id);

        posts[i].upvotes = 0;
        posts[i].downvotes = 0;

        for (let j = 0; j < votes.length; j++) {
            if (votes[j].vote) {
                posts[i].upvotes += 1;
            } else {
                posts[i].downvotes += 1;
            }
        }

        console.log(posts[i].post_id, stu_id)
        const { data: user_vote, error____ } = await supabase
            .from('post_vote')
            .select('*')
            .eq('post_id', posts[i].post_id)
            .eq('stu_id', stu_id)
            .single();

        posts[i].voted = !user_vote ? null : user_vote.vote;
    }

    return posts;
}

module.exports = {
    create_post,
    edit_post,
    delete_post,
    comment,
    delete_comment,
    vote,
    cancel_upvote,
    cancel_downvote,
    get_feed,
}
