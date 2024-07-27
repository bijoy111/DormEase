const {
    apply_mess_manager,
    get_mess_manager_applicant,
    assign_mess_manager,
    get_mess_manager,
    cancel_mess_manager
} = require('../controllers/mess_manager.controller');

module.exports = (router) => {
    router.get('/mess_manager', get_mess_manager);
    router.get('/mess_manager/applicants', get_mess_manager_applicant);
    router.post('/mess_manager', apply_mess_manager);
    router.post('/mess_manager/assign', assign_mess_manager);
    router.delete('/mess_manager', cancel_mess_manager);
}