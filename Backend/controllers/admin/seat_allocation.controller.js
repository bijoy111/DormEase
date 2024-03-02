const { seat_allocation_model } = require('../../models/admin');

const get_rooms = async (req, res, next) => {
    const result = await seat_allocation_model.get_rooms();

    let rooms = [];
    let curr_room_no = -1;

    for (let i = 0; i < result.length; i++) {
        if (result[i].room_no !== curr_room_no) {
            curr_room_no = result[i].room_no;
            rooms.push({
                room_no: result[i].room_no,
                seats: [{}, {}, {}, {}]
            });
        }

        rooms[rooms.length - 1].seats[result[i].seat_no] = {
            stu_id: result[i].stu_id,
            name: result[i].name,
            dept: result[i].dept,
            level_term: result[i].level_term
        };
    }

    return res.status(200).json(rooms);
}


const get_applicants = async (req, res, next) => {
    const result = await seat_allocation_model.get_applicants();
    return res.status(200).json(result);
}

const allocate_room = async (req, res, next) => {
    const { stu_id, room_no, seat_no } = req.body;
    const result = await seat_allocation_model.allocate_room(stu_id, room_no, seat_no);
    return res.status(200).json(result);
}

const get_room_change_applicants = async (req, res, next) => {
    const result = await seat_allocation_model.get_room_change_applicants();
    return res.status(200).json(result);
}

const allocate_room_change = async (req, res, next) => {
    const { stu_id, room_no, seat_no, decision } = req.body;
    const result = await seat_allocation_model.allocate_room_change(stu_id, room_no, seat_no, decision);
    return res.status(200).json(result);
}

const get_room_cancel_applicants = async (req, res, next) => {
    const result = await seat_allocation_model.get_room_cancel_applicants();
    return res.status(200).json(result);
}

const allocate_room_cancel = async (req, res, next) => {
    const { stu_id, decision } = req.body;
    const result = await seat_allocation_model.allocate_room_cancel(stu_id, decision);
    return res.status(200).json(result);
}

module.exports = {
    get_rooms,
    get_applicants,
    allocate_room,
    get_room_change_applicants,
    allocate_room_change,
    get_room_cancel_applicants,
    allocate_room_cancel
}