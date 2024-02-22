const { create_post,
    delete_post,
    comment,
    upvote,
    cancel_upvote,
    downvote,
    cancel_downvote,
    get_feed } = require('../controllers/feed.controller');

module.exports = (router) => {
    router.get('/feed', get_feed);
    // router.get('/feed/post/:post_id', func);
    router.post('/feed/post/compose', create_post);
    router.post('/feed/post/:post_id/delete', delete_post);
    router.post('/feed/comment/:post_id', comment);
    router.post('/feed/comment/:post_id/delete', delete_post);
    router.post('/feed/upvote/:post_id', upvote);
    router.post('/feed/upvote/:post_id/cancel', cancel_upvote);
    router.post('/feed/downvote/:post_id', downvote);
    router.post('/feed/downvote/:post_id/cancel', cancel_downvote);
}

/**
 * @swagger
 * tags:
 *   name: Feed
 */

/**
 * @swagger
 * /feed:
 *    get:
 *      summary: Show newsfeed
 *      tags: [Feed]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                 type: array
 *                 items:
 *                     $ref: '#/components/responses/Post'
 *              example:
 *                 [
 *                     {
 *                         post_id: 20,
 *                         stu_id: 1905052,
 *                         name: Bijoy Saiem,
 *                         created_at: "2024-01-01 01:00:00",
 *                         text: This is a post,
 *                         type: status,
 *                         upvote: 5,
 *                         is_upvoted: true,
 *                         is_mine: true,
 *                         media: ["https://example.com/image1.jpg"],
 *                         comments: []
 *                     },
 *                     {
 *                         post_id: 23,
 *                         stu_id: 1905025,
 *                         name: Rahim Uddin,
 *                         created_at: "2024-01-01 01:20:00",
 *                         text: This is another post,
 *                         type: post,
 *                         upvote: 2,
 *                         is_upvoted: true,
 *                         is_mine: false,
 *                         media: [],
 *                         comments: []
 *                     }
 *                 ]
 */

/**
 * @swagger
 * /feed/post/compose:
 *    post:
 *      summary: Create post
 *      tags: [Feed]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - text
 *                - media
 *              properties:
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                  text: This is a post
 *                  media: ["https://www.google.com", "https://www.amazon.com"]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /feed/post/{post_id}/delete:
 *    post:
 *      summary: Delete post
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /feed/comment/{post_id}:
 *    post:
 *      summary: Comment on a post or reply to a comment
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - text
 *                - media
 *              properties:
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                  text: This is a post
 *                  media: ["https://www.google.com", "https://www.amazon.com"]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /feed/upvote/{post_id}:
 *    post:
 *      summary: Give upvote in post or comment
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /feed/upvote/{post_id}/cancel:
 *    post:
 *      summary: remove upvote in post or comment
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /feed/downvote/{post_id}:
 *    post:
 *      summary: Give downvote in post or comment
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /feed/downvote/{post_id}/cancel:
 *    post:
 *      summary: Remove downvote in post or comment
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */