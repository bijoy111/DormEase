const { notice_model } = require('../models');
const fs = require('fs');
const path = require('path');

const get_notice = async (req, res, next) => {
    // if (!req.user) {
    //     return res.status(401).json({
    //         error: 'Unauthorized'
    //     });
    // }

    const post_id = req.params.post_id;

    available = await notice_model.is_notice_available(post_id);
    if (!available) {
        return res.status(404).json({
            error: 'Not Found'
        });
    }

    const notice = await notice_model.get_notice(post_id);
    return res.status(200).json({
        ...notice
    });
}

const get_notices = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const id = req.user.id;
    const notices = await notice_model.get_notices(id);
    return res.status(200).json([
        ...notices
    ]);
}

const create_notice = async (req, res, next) => {
    // if (!req.user || req.user.role !== 'admin') {
    //     return res.status(401).json({
    //         error: 'Unauthorized'
    //     });
    // }

    const { title, text, is_private, student_list } = req.body;
    const media = req.files ? req.files.map(file => file.filename) : null;
    const result = await notice_model.create_notice(title, text, media, is_private, student_list);
    return res.status(200).json({
        message: 'OK'
    });
}

const delete_notice = async (req, res, next) => {
    // if (!req.user || req.user.role !== 'admin') {
    //     return res.status(401).json({
    //         error: 'Unauthorized'
    //     });
    // }

    const post_id = req.params.post_id;

    is_notice_available = await notice_model.is_notice_available(post_id);
    if (!is_notice_available) {
        return res.status(404).json({
            error: 'Not Found'
        });
    }

    const media_path = path.join(__dirname, '../public/');
    const media = await notice_model.get_media(post_id);
    console.log(media);
    media.forEach(file => {
        fs.unlinkSync(path.join(media_path, file.media_link));
    });

    const result = await notice_model.delete_notice(post_id);

    return res.status(200).json({
        message: 'OK'
    });
}

module.exports = {
    get_notice,
    get_notices,
    create_notice,
    delete_notice
}