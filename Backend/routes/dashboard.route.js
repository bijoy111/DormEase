const { get_student_info,
    update_student_info } = require('../controllers/dashboard.controller');

const { upload } = require('../middlewares/multerjs');

module.exports = (router) => {
    router.get('/dashboard/edit', get_student_info);
    router.put('/dashboard/edit', upload.single('photo'), update_student_info);
}