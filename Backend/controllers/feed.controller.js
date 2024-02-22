const { feed_model } = require('../models');

const create_post = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { text, media } = req.body;
    const result = await feed_model.create_post(stu_id, text, media);
    return res.status(200).json({
        message: 'OK',
    });
}

const delete_post = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const result = await feed_model.delete_post(post_id, stu_id);
    
    if (result.error) {
        return res.status(401).json({
            error: result.error
        });
    }

    return res.status(200).json({
        message: 'OK',
    });
}

const comment = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const { text, media } = req.body;
    const result = await feed_model.comment(post_id, stu_id, text, media);
    return res.status(200).json({
        message: 'OK',
    });
}

const upvote = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const result = await feed_model.upvote(post_id, stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const cancel_upvote = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const result = await feed_model.cancel_upvote(post_id, stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const downvote = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const result = await feed_model.downvote(post_id, stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const cancel_downvote = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const post_id = req.params.post_id;
    const result = await feed_model.cancel_downvote(post_id, stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

const get_feed = async (req, res, next) => {
    const result = await feed_model.get_feed();
    return res.status(200).json(result);
}

module.exports = {
    create_post,
    delete_post,
    comment,
    upvote,
    cancel_upvote,
    downvote,
    cancel_downvote,
    get_feed,
};
