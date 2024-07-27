const { mess_manager_model } = require('../../models/admin');

const get_mess_manager_application = async (req, res) => {
    const result = await mess_manager_model.get_mess_manager_application();
    return res.status(200).json(
        result
    );
}

const approve_mess_manager = async (req, res) => {
    const { stu_id } = req.body;
    const result = await mess_manager_model.approve_mess_manager(stu_id);
    console.log('approved');
    return res.status(200).json({
        message: 'OK'
    });
}

const remove_mess_manager = async (req, res) => {
    const { stu_id } = req.body;
    const result = await mess_manager_model.remove_mess_manager(stu_id);
    console.log('removed');
    return res.status(200).json({
        message: 'OK'
    });
}

const get_students = async (req, res) => {
    const result = await mess_manager_model.get_students();
    return res.status(200).json(
        result
    );
}

const approve_manager = async (req, res) => {
    console.log('controller_approve_manager');
    console.log(req.body);
    const { stu_id } = req.body;
    const result = await mess_manager_model.approve_manager(stu_id);
    return res.status(200).json({
        message: 'OK'
    });
}

const delete_manager = async (req, res) => {
    console.log('controller_delete_manager');
    console.log(req.body);
    const { stu_id } = req.body;
    const result = await mess_manager_model.delete_manager(stu_id);
    return res.status(200).json({
        message: 'OK'
    });
}

const require_manager = async (req, res) => {
    const result = await mess_manager_model.require_manager();
    return res.status(200).json({
        message: 'OK'
    });
}

const stop_managerApplication = async (req, res) => {
    const result = await mess_manager_model.stop_managerApplication();
    return res.status(200).json({
        message: 'OK'
    });
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