const { func } = require('../controllers/complain.controller');

module.exports = (router) => {
    router.get('/complain', func);
    router.post('/complain/compose', func);
    router.get('/message/comp_id', func);
    router.post('/message/comp_id', func);
}

/**
 * @swagger
 * tags:
 *   name: Complaint
 */

/**
 * @swagger
 * /complain:
 *    get:
 *      summary: Show all complaints
 *      tags: [Complaint]
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    comp_id:
 *                      type: number
 *                    stu_id:
 *                      type: number
 *                    title:
 *                      type: string
 *                    text:
 *                      type: string
 *              example:
 *                [{
 *                    comp_id: 1,
 *                    stu_id: 1905024,
 *                    title: "My roommates are noisy",
 *                    text: "My roommates are noisy"
 *                 }, 
 *                 {
 *                   comp_id: 2,
 *                   stu_id: 1905025,
 *                   title: "My roommates are noisy",
 *                   text: "My roommates are noisy"
 *                }]
 */

/**
 * @swagger
 * /message/comp_id:
 *    get:
 *      summary: Show all messages of a complaint
 *      tags: [Complaint]
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  comp_id:
 *                    type: number
 *                  create_time:
 *                    type: string
 *                  admin_side:
 *                    type: boolean
 *                  text:
 *                    type: string
 *              example:
 *                comp_id: 1
 *                create_time: "2021-05-01 12:00:00"
 *                admin_side: false
 *                text: "My roommates are noisy"
 *    post:
 *      summary: Send a message to a complaint
 *      tags: [Complaint]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - comp_id
 *                - admin_side
 *                - text
 *              properties:
 *                comp_id:
 *                  type: number
 *                admin_side:
 *                  type: boolean
 *                text:
 *                  type: string
 *              example:
 *                 comp_id: 1
 *                 admin_side: false
 *                 text: "My roommates are noisy"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /complain/compose:
 *    post:
 *      summary: Submit a new complaint
 *      tags: [Complaint]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *                - title
 *                - text
 *              properties:
 *                  stu_id:
 *                      type: number
 *                  title:
 *                      type: string
 *                  text:
 *                      type: string
 *              example:
 *                  stu_id: 1905024
 *                  title: "My roommates are noisy"
 *                  text: "My roommates are noisy" 
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */