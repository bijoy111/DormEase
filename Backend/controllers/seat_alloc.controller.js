const { seatAlloc_model } = require('../models');
const get_rooms = async (req, res, next) => {
    console.log("get_rooms");
    const result = await seatAlloc_model.get_rooms();
    return res.status(200).json(result);
}

module.exports = {
    get_rooms,
};