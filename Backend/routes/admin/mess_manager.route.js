const mess_manager_controller = require('../../controllers/admin/mess_manager.controller');

module.exports = (router) => {
  router.get('/mess_manager_application', mess_manager_controller.get_mess_manager_application);
  router.post('/approve_mess_manager', mess_manager_controller.approve_mess_manager);
}
