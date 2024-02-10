const { dining_model } = require('../models');

const get_menu = async (req, res, next) => {
    // read from params
    const date = req.params.date;
    const menu = await dining_model.get_menu_from_date(date);
    console.log(menu.rows);
    if (menu.length === 0) {
        return res.status(404).json({
            error: 'Menu not found'
        });
    }

    // array of json objects containing name, price_per_unit and quantity
    const lunch_arr = [];
    const dinner_arr = [];

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].meal_time === 'Lunch') {
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

module.exports = {
    get_menu
}