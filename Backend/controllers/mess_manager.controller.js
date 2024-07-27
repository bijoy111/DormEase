const { mess_manager_model } = require('../models');

//--- student functions ---//

async function apply_mess_manager(req, res, next) {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id_array = req.body.stu_id_array;
    const result = await mess_manager_model.apply_mess_manager(stu_id_array);
    return res.status(200).json({
        message: 'OK',
    });
}

//--- admin functions ---//

async function get_mess_manager_applicant(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const result = await mess_manager_model.get_mess_manager_applicant();
    let result_dict = {};
    for (i = 0; i < result.length; i++) {
        if (!result_dict[result[i].applicant_id]) {
            result_dict[result[i].applicant_id] = [];
        }
        result_dict[result[i].applicant_id].push(result[i].student);
    }
    
    return res.status(200).json(
        result_dict
    );
}

async function assign_mess_manager(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const applicant_id = req.body.applicant_id;
    const result = await mess_manager_model.assign_mess_manager(applicant_id);
    return res.status(200).json({
        message: 'OK',
    });
}

// --- general functions ---//

async function get_mess_manager(req, res, next) {
    if (!req.user) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const result = await mess_manager_model.get_mess_manager();
    return res.status(200).json(
        result
    );
}

async function cancel_mess_manager(req, res, next) {
    if (!req.user) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const result = await mess_manager_model.cancel_mess_manager(stu_id);
    return res.status(200).json({
        message: 'OK',
    });
}

module.exports = {
    apply_mess_manager,
    get_mess_manager_applicant,
    assign_mess_manager,
    get_mess_manager,
    cancel_mess_manager
}

