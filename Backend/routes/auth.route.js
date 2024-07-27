const { create_student, login } = require('../controllers/auth.controller');

module.exports = (router) => {
    router.post('/auth/create-student', create_student);
    router.post('/auth/login', login);
}
