const { get_notice,
    get_notices,
    create_notice,
    delete_notice } = require('../controllers/notice.controller');

const { upload } = require('../middlewares/multerjs');

module.exports = (router) => {
    router.get('/notice', get_notices);
    router.get('/notice/:post_id', get_notice);
    router.delete('/notice/:post_id', delete_notice);
    router.post('/notice', upload.array('media'), create_notice);
}