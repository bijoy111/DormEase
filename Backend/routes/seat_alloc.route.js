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
<<<<<<< HEAD
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
=======
 *      summary: Show all seat allocations [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/SeatAllocation'
>>>>>>> c92ebce3b2901a3cbc915412c5c5ced50cb8ffc4
 */

/**
 * @swagger
 * /auto_allocate:
 *    get:
<<<<<<< HEAD
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
=======
 *      summary: Automatically allocate seats [Admin privilege required]
 *      tags: [Seat Allocation]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/SeatAllocation'
>>>>>>> c92ebce3b2901a3cbc915412c5c5ced50cb8ffc4
 */

/**
 * @swagger
 * /allocation/assign:
 *    post:
<<<<<<< HEAD
 *      summary: Assign a seat to a student
=======
 *      summary: Assign a seat to a student [Admin privilege required]
>>>>>>> c92ebce3b2901a3cbc915412c5c5ced50cb8ffc4
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
<<<<<<< HEAD
=======
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
>>>>>>> c92ebce3b2901a3cbc915412c5c5ced50cb8ffc4
 */