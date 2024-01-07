const { func } = require('../controllers/notice.controller');

module.exports = (router) => {
    router.get('/notice', func);
    router.get('/notice/notice_id', func);
    router.post('/notice/compose', func);
}

/**
 * @swagger
 * tags:
 *   name: Notice
 */

/**
 * @swagger
 * /notice:
 *    get:
 *      summary: Show newsfeed
 *      tags: [Notice]
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                 type: array
 *                 items:
 *                     $ref: '#/components/responses/Notice'
 *              example:
 *                 [
 *                     {
 *                         notice_id: 20,
 *                         created_at: "2024-01-01 01:00:00",
 *                         title: Notice title,
 *                         text: This is a notice,
 *                         media: ["https://example.com/image1.jpg"],
 *                     },
 *                     {
 *                         notice_id: 30,
 *                         created_at: "2024-01-01 01:00:00",
 *                         title: Notice title,
 *                         text: This is a notice,
 *                         media: ["https://example.com/image1.jpg"],
 *                     },
 *                 ]
 */

/**
 * @swagger
 * /notice/{post_id}:
 *    get:
 *      summary: Show a notice
 *      tags: [Notice]
 *      parameters:
 *        - in: path
 *          name: notice_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Notice ID
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Notice'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /notice/compose:
 *    post:
 *      summary: Create notice [Admin privilege required]
 *      tags: [Notice]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - title
 *                - text
 *                - media
 *              properties:
 *                title:
 *                  type: string
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                  title: Notice title
 *                  text: This is a post
 *                  media: ["https://www.google.com", "https://www.amazon.com"]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */
