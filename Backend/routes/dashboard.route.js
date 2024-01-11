const { func } = require('../controllers/dashboard.controller');

module.exports = (router) => {
    router.get('/dashboard', func);
    router.get('/application/rooms', func);
    router.post('/application/rooms', func);
    router.get('/application/room_change', func);
    router.post('/application/room_change', func);
    router.get('/dashboard/edit', func);
    router.post('/dashboard/edit', create_student);
}

/**
 * @swagger
 * tags:
 *   name: Dashboard
 */

/**
 * @swagger
 * /dashboard:
 *    get:
 *      summary: Show basic user info
 *      tags: [Dashboard]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  stu_id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  dept:
 *                    type: string
 *                  level_term:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  cgpa:
 *                    type: number
 *                  photo:
 *                    type: string
 *                  room_no:
 *                    type: number
 *                  hall:
 *                    type: string
 *                  resident:
 *                    type: boolean
 *                  guardian_name:
 *                    type: string
 *                  guardian_phone:
 *                    type: string
 *              example:
 *                  stu_id: 1905024
 *                  name: John Doe
 *                  email: johndoe31@gmail.com
 *                  dept: CSE
 *                  level_term: 3-1
 *                  phone: "01700000000"
 *                  cgpa: 3.5
 *                  photo: "https://example.com/image1.jpg"
 *                  room_no: 101
 *                  hall: Shahid Smriti Hall
 *                  resident: true
 *                  guardian_name: Jane Doe
 *                  guardian_phone: "01700000001"
 */

/**
 * @swagger
 * /dashboard/edit:
 *    get:
 *      summary: Show editable user info
 *      tags: [Dashboard]
 *      requestBody:
 *        content:
 *          application/json: {}
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  email:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  guardian_name:
 *                    type: string
 *                  guardian_phone:
 *                    type: string
 *              example:
 *                email: rakibahsan321@gmail.com
 *                phone: "01710000000"
 *                photo: "https://example.com/image1.jpg"
 *                guardian_name: John Doe
 *                guardian_phone: "01700000000"
 *    post:
 *      summary: Update user info
 *      tags: [Dashboard]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - old_password
 *                - new_password
 *                - email
 *                - phone
 *                - photo
 *                - guardian_name
 *                - guardian_phone
 *              properties:
 *                old_password:
 *                  type: string
 *                new_password:
 *                  type: string
 *                email:
 *                  type: string
 *                phone:
 *                  type: string
 *                photo:
 *                  type: string
 *                guardian_name:
 *                  type: string
 *                guardian_phone:
 *                  type: string
 *              example:
 *                  old_password: password1
 *                  new_password: password2
 *                  email: johndoe31@gmail.com
 *                  phone: "01700000000"
 *                  photo: "https://example.com/image1.jpg"
 *                  guardian_name: Jane Doe
 *                  guardian_phone: "01700000001"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /application/room/apply:
 *    post:
 *      summary: Submit room application form
 *      tags: [Dashboard]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *                - home_district
 *                - school
 *                - college
 *              properties:
 *                  stu_id:
 *                      type: number
 *                  home_district:
 *                      type: string
 *                  school:
 *                      type: string
 *                  college:
 *                      type: string
 *              example:
 *                  stu_id: 1905024
 *                  home_district: Dhaka
 *                  school: ABC School
 *                  college: ABC College
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /application/room/change:
 *    get:
 *      summary: Show application form for room change with vacant rooms
 *      tags: [Dashboard]
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
 *                    room_no:
 *                      type: number
 *                    seat_no:
 *                      type: array
 *                      items:
 *                        type: number
 *              example:
 *               - room_no: 101
 *                 seat_no: [1, 2]
 *               - room_no: 102
 *                 seat_no: [0, 3]
 *    post:
 *      summary: Submit application form for room change
 *      tags: [Dashboard]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *                - room_no
 *                - seat_no
 *                - new_room_no
 *                - new_seat_no
 *                - reason
 *              properties:
 *                  stu_id:
 *                      type: number
 *                  room_no:
 *                      type: number
 *                  seat_no:
 *                      type: number
 *                  new_room_no:
 *                      type: number
 *                  new_seat_no:
 *                      type: number
 *                  reason:
 *                      type: string
 *              example:
 *                 stu_id: 1905024
 *                 room_no: 101
 *                 seat_no: 1
 *                 new_room_no: 102
 *                 new_seat_no: 3
 *                 reason: My roommates are noisy
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */
