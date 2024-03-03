const { admin_dining_model } = require('../../models/admin');

const get_menu_from_date = async (req, res, next) => {
    const { date } = req.body;
    const result = await admin_dining_model.get_menu_from_date(date);
    return res.status(200).json(result);
}

const get_mess_manager = async (req, res, next) => {
    const result = await admin_dining_model.get_mess_manager();
    return res.status(200).json(result);
}

const add_dining_student_entry = async (req, res, next) => {
    const { stu_id, date, meal_time } = req.body;
    const result = await admin_dining_model.add_dining_student_entry(stu_id, date, meal_time);
    return res.status(200).json(result);
}

const get_dining_student_entry = async (req, res, next) => {
    const date = req.params.date;
    const meal_time = req.params.meal_time;
    const result = await admin_dining_model.get_dining_student_entry(date, meal_time);
    return res.status(200).json(result);
}

const get_student_monthly_dining_count = async (req, res, next) => {
    const { stu_id, month } = req.body;
    const result = await admin_dining_model.get_student_monthly_dining_count(stu_id, month);
    return res.status(200).json(result);
}

module.exports = {
    get_menu_from_date,
    get_mess_manager,
    get_dining_student_entry,
    add_dining_student_entry,
    get_student_monthly_dining_count
}