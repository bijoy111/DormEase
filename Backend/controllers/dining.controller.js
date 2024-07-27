const { dining_model } = require('../models');

const get_menu = async (req, res, next) => {
    // read from params
    const date = req.params.date;
    const menu = await dining_model.get_menu_from_date(date);
    if (!menu) {
        return res.status(404).json({
            error: 'Menu not found'
        });
    }

    return res.status(200).json(menu);
}

const post_menu = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { lunch, dinner, special } = req.body;

    if (!dining_model.is_mess_manager(stu_id)) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const result = await dining_model.post_menu(lunch, dinner, special);
    return res.status(200).json({
        message: 'OK',
    });
}

const add_dining_entry = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const { stu_id, meal_time } = req.body;

    const result = await dining_model.add_dining_entry(stu_id, meal_time);
    return res.status(200).json({
        message: 'OK',
    });
}

const get_dining_entry = async (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_array = await dining_model.get_all_stu_id();
    const date = req.params.date;

    let result = [];
    for (i = 0; i < stu_array.length; i++) {
        const entry = await dining_model.get_dining_entry(stu_array[i].stu_id, date);
        entry.level_term = stu_array[i].level_term;
        result.push(entry);
    }

    return res.status(200).json(
        result
    );
}

module.exports = {
    get_menu,
    post_menu,
    add_dining_entry,
    get_dining_entry
}