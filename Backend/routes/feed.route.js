const { func } = require('../controllers/feed.controller');

module.exports = (router) => {
    router.get('/feed', func);
    router.get('/feed/post/:post_id', func);
    router.post('/feed/post/compose', func);
    router.post('/feed/post/:post_id/delete', func);
    router.post('/feed/comment/:post_id', func);
    router.post('/feed/upvote/:post_id', func);
    router.post('/feed/downvote/:post_id', func);
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
 * /feed/post/{post_id}:
 *    get:
 *      summary: Show a post
 *      tags: [Feed]
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *            type: string
 *          required: true
 *          description: Post ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Post'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /post/compose:
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
 *                - stu_id
 *                - text
 *                - media
 *                - type
 *              properties:
 *                stu_id:
 *                  type: number
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *                "type":
 *                  type: string
 *              example:
 *                  stu_id: 1905024
 *                  text: This is a post
 *                  media: ["https://www.google.com", "https://www.amazon.com"]
 *                  "type": status
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *              properties:
 *                stu_id:
 *                  type: number
 *              example:
 *                stu_id: 1905024          
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
 *                - stu_id
 *                - parent_id
 *                - text
 *                - media
 *              properties:
 *                stu_id:
 *                  type: number
 *                parent_id:
 *                  type: number
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                  stu_id: 1905024
 *                  parent_id: 1
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
 *      summary: Give or remove upvote in post or comment
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
 *                - stu_id
 *                - post_id
 *              properties:
 *                stu_id:
 *                  type: number
 *                post_id:
 *                  type: number
 *              example:
 *                  stu_id: 1905024
 *                  post_id: 1
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
 *      summary: Give or remove downvote in post or comment
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
 *                - stu_id
 *                - post_id
 *              properties:
 *                stu_id:
 *                  type: number
 *                post_id:
 *                  type: number
 *              example:
 *                  stu_id: 1905024
 *                  post_id: 1
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */