const { complaint_model } = require('../models');

const get_complaints = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const role = req.user.role;
    const stu_id = req.user.id;
    const complaints = await complaint_model.get_complaints(role, stu_id);

    return res.status(200).json(complaints);
}

const post_complaint = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { title, text } = req.body;
    const result = await complaint_model.post_complaint(stu_id, title, text);
    return res.status(200).json({
        message: 'OK',
    });
}

const update_complaint_stage = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const complaint_id = req.body.comp_id;
    const new_stage = req.body.stage;

    const result = await complaint_model.update_complaint_stage(complaint_id, new_stage);
    if (result.error) {
        return res.status(404).json({
            error: result.error
        });
    }

    return res.status(200).json({
        message: 'OK',
    });
}

const delete_complaint = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const complaint_id = req.params.comp_id;
    const id = req.user.id;

    const result = await complaint_model.delete_complaint(complaint_id, id);

    console.log("complaint deleted");
    return res.status(200).json({
        message: 'OK',
    });
}

module.exports = {
    get_complaints,
    post_complaint,
    update_complaint_stage,
    delete_complaint
}