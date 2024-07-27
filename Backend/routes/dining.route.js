const { get_menu, post_menu, add_dining_entry, get_dining_entry } = require('../controllers/dining.controller');

module.exports = (router) => {
  router.get('/dining/menu/:date', get_menu);
  router.post('/dining/menu', post_menu);
  router.get('/dining/entry/:date', get_dining_entry);
  router.post('/dining/entry', add_dining_entry);
}