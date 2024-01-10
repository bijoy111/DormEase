const { func } = require('../controllers/seat_alloc.controller');

module.exports = (router) => {
    router.get('/allocation', func);
    router.get('/auto_allocate', func);
    router.post('/allocation/assign', func);
}

/**
 * @swagger
 * tags:
 *   name: Seat Allocation
 */

/**
 * @swagger
 * /allocation:
 *    get:
 *      summary: Show all seat allocations
 *      tags: [Seat Allocation]
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  properties:
 *                    seat_no:
 *                      type: array
 *                      items:
 *                        type: number
 *                    room_no:
 *                      type: number
 *              example:
 *                [{
 *                seat_no: [1905024, 1905048, 1905052, 1905020],
 *                room_no: 506
 *                },
 *                {
 *                seat_no: [1905025, 1905049, null, 1905021],
 *                room_no: 507
 *                }]
 */

/**
 * @swagger
 * /auto_allocate:
 *    get:
 *      summary: Automatically allocate seats
 *      tags: [Seat Allocation]
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  properties:
 *                    seat_no:
 *                      type: array
 *                      items:
 *                        type: number
 *                    room_no:
 *                      type: number
 *              example:
 *                [{
 *                seat_no: [1905024, 1905048, 1905052, 1905020],
 *                room_no: 506
 *                },
 *                {
 *                seat_no: [1905042, 1905046, 1905047, 1905021],
 *                room_no: 507
 *                }]
 */

/**
 * @swagger
 * /allocation/assign:
 *    post:
 *      summary: Assign a seat to a student
 *      tags: [Seat Allocation]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - seat_no
 *                - room_no
 *                - stu_id
 *              properties:
 *                  seat_no:
 *                      type: number
 *                  room_no:
 *                      type: number
 *                  stu_id:
 *                      type: number
 *              example:
 *                seat_no: 1
 *                room_no: 105
 *                stu_id: 1905024 
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */