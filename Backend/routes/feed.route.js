const { create_post,
    edit_post,
    delete_post,
    comment,
    delete_comment,
    upvote,
    cancel_upvote,
    downvote,
    cancel_downvote,
    get_feed } = require('../controllers/feed.controller');

const { upload } = require('../middlewares/multerjs');

module.exports = (router) => {
    router.get('/feed', get_feed);
    router.post('/feed', upload.array('media'), create_post);
    router.put('/feed/post/:post_id', upload.array('media'), edit_post);
    router.delete('/feed/post/:post_id', delete_post);
    router.post('/feed/post/:post_id/comment', comment);
    router.delete('/feed/post/:post_id/comment/:comment_id', delete_comment);
    router.post('/feed/post/:post_id/upvote', upvote);
    router.post('/feed/post/:post_id/upvote/cancel', cancel_upvote);
    router.post('/feed/post/:post_id/downvote', downvote);
    router.post('/feed/post/:post_id/downvote/cancel', cancel_downvote);
}