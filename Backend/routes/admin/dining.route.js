const admin_dining_controller = require('../../controllers/admin/dining.controller');

module.exports = (router) => {
  router.get('/dining/mess-managers/get', admin_dining_controller.get_mess_manager);
  router.get('/dining/:date/entry/:meal_time', admin_dining_controller.get_dining_student_entry);
  router.post('/dining/:date/entry/student', admin_dining_controller.add_dining_student_entry);
  router.get('/dining/count/:month', admin_dining_controller.get_student_monthly_dining_count);
}
