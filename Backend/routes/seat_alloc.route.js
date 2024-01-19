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
 *      summary: Show all seat allocations [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/SeatAllocation'
 */

/**
 * @swagger
 * /auto_allocate:
 *    get:
 *      summary: Automatically allocate seats [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/SeatAllocation'
 */

/**
 * @swagger
 * /allocation/assign:
 *    post:
 *      summary: Assign a seat to a student [Admin privilege required]
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

/**
 * @swagger
 * /allocation/change:
 *    get:
 *      summary: Show all applicants for seat change [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/SeatChange'
 *    post:
 *      summary: Grant or reject a seat change request [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *                - granted
 *              properties:
 *                stu_id:
 *                  type: number
 *                granted:
 *                  type: boolean  
 *              example:
 *                stu_id: 1905024 
 *                granted: true 
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */