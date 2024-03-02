const admin_dining_controller = require('../../controllers/admin/dining.controller');

module.exports = (router) => {
  router.get('/dining/:date/entry/student', get_menu);
  router.post('/dining/:date/entry/student', get_menu);
}
