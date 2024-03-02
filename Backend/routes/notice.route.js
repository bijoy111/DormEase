const { get_notice,
    get_notices,
    create_notice,
    delete_notice } = require('../controllers/notice.controller');

const { upload } = require('../middlewares/multerjs');

module.exports = (router) => {
    router.get('/notice', get_notices);
    router.get('/notice/:post_id', get_notice);
    router.delete('/notice/:post_id', delete_notice);
    router.post('/notice/compose', create_notice);
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
 *                     $ref: '#/components/responses/Notice'
 *              example:
 *                 [
 *                     {
 *                         post_id: 20,
 *                         created_at: "2024-01-01 01:00:00",
 *                         title: Notice title,
 *                         text: This is a notice
 *                     },
 *                     {
 *                         post_id: 30,
 *                         created_at: "2024-01-01 01:00:00",
 *                         title: Notice title,
 *                         text: This is a notice
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
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Notice ID
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Notice'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 *    delete:
 *      summary: Delete a notice [Admin privilege required]
 *      tags: [Notice] 
 *      parameters:
 *        - in: path
 *          name: post_id
 *          schema:
 *              type: string
 *          required: true
 *          description: Notice ID
 *      responses:
 *        "200":
 *           $ref: '#/components/responses/Success'
 *        "404":
 *           $ref: '#/components/responses/NotFound'
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
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                text:
 *                  type: string
 *                media:
 *                  type: array
 *                  items:
 *                    type: string
 *                    format: binary
 *              example:
 *                  title: Notice title
 *                  text: This is a post
 *                  media: ["image1", "image2", "video1"]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */
