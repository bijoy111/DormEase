const { get_complaints, post_complaint, update_complaint_stage, delete_complaint } = require('../controllers/complaint.controller');

module.exports = (router) => {
    router.get('/complaints', get_complaints);
    router.post('/complaints', post_complaint);
    router.put('/complaints/:comp_id', update_complaint_stage);
    router.delete('/complaints/:comp_id', delete_complaint);
}