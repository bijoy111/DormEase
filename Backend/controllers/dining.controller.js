const { dining_model } = require('../models');

const get_menu = async (req, res, next) => {
    console.log(req.params.date);
    // read from params
    const date = req.params.date;
    const menu = await dining_model.get_menu_from_date(date);
    console.log(menu.length);
    if (menu.length === 0) {
        return res.status(404).json({
            error: 'Menu not found'
        });
    }

    // array of json objects containing name, price_per_unit and quantity
    const lunch_arr = [];
    const dinner_arr = [];

    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i].meal_time);
        if (menu[i].meal_time === 'Lunch' || menu[i].meal_time === 'lunch') {
            lunch_arr.push({
                name: menu[i].item_name,
                price_per_unit: menu[i].price_per_unit,
                quantity: menu[i].amount
            });
        }
        else if (menu[i].meal_time === 'Dinner') {
            dinner_arr.push({
                name: menu[i].item_name,
                price_per_unit: menu[i].price_per_unit,
                quantity: menu[i].amount
            });
        }
    }

    return res.status(200).json({
        date: date,
        lunch: lunch_arr,
        dinner: dinner_arr
    });
}

const post_menu = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id = req.user.id;
    const { date, name, meal_time } = req.body;
    const result = await dining_model.post_menu(date, name, meal_time);
    return res.status(200).json({
        message: 'OK',
    });
}

const apply_mess_manager = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id_1 = req.user.id;
    const stu_id_2 = req.body.stu_id_2;
    const result = await dining_model.apply_mess_manager(stu_id_1, stu_id_2);
    return res.status(200).json({
        message: 'OK',
    });
}

const cancel_mess_manager = async (req, res, next) => {
    if (!req.user || req.user.role !== 'student') {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    const stu_id_1 = req.user.id;
    const stu_id_2 = req.body.stu_id_2;
    const result = await dining_model.cancel_mess_manager(stu_id_1, stu_id_2);
    return res.status(200).json({
        message: 'OK',
    });
}

module.exports = {
    get_menu,
    post_menu,
    apply_mess_manager,
    cancel_mess_manager
}