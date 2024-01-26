const { get_complaints, post_complaint, update_complaint_stage } = require('../controllers/complaint.controller');

module.exports = (router) => {
    router.get('/complaint', get_complaints);
    router.post('/complaint/compose', post_complaint);
    router.post('/complaint/update', update_complaint_stage);
}

/**
 * @swagger
 * tags:
 *   name: Complaint
 */

/**
 * @swagger
 * /complaint:
 *    get:
 *      summary: Show all complaints
 *      tags: [Complaint]
 *      requestBody:
 *        content:
 *          application/json: {}
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
 *                    body:
 *                      type: string
 *              example:
 *                [{
 *                    comp_id: 1,
 *                    stu_id: 1905024,
 *                    title: "My roommates are noisy",
 *                    body: "My roommates are noisy",
 *                    stage: 1,
 *                    created_at: "2021-05-01 12:00:00"
 *                 }, 
 *                 {
 *                    comp_id: 2,
 *                    stu_id: 1905025,
 *                    title: "Light bulb is broken",
 *                    body: "Light bulb is broken",
 *                    stage: 2,
 *                    created_at: "2021-05-01 12:00:00"
 *                 }]
 */

/**
 * @swagger
 * /complaint/compose:
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
 *                - title
 *                - body
 *              properties:
 *                  title:
 *                      type: string
 *                  body:
 *                      type: string
 *              example:
 *                  title: "My roommates are noisy"
 *                  body: "My roommates are noisy" 
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /complaint/update:
 *    post:
 *      summary: Update complaint stage
 *      tags: [Complaint]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - comp_id
 *                - stage
 *              properties:
 *                comp_id:
 *                  type: number
 *                stage:
 *                  type: number
 *              example:
 *                comp_id: 2
 *                stage: 2
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */