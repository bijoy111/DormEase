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
 *                  guardian_phone: 01700000001
 */

/**
 * @swagger
 * /dashboard/edit:
 *    get:
 *      summary: Show editable user info
 *      tags: [Dashboard]
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
 *                - password
 *                - email
 *                - phone
 *                - photo
 *                - guardian_name
 *                - guardian_phone
 *              properties:
 *                password:
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
 *                  password: password1
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
 *    get:
 *      summary: Show room application form
 *      tags: [Dashboard]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
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
 *      summary: Show application form for room change
 *      tags: [Dashboard]
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
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
 *                - new_room_no
 *                - reason
 *              properties:
 *                  stu_id:
 *                      type: number
 *                  room_no:
 *                      type: number
 *                  new_room_no:
 *                      type: number
 *                  reason:
 *                      type: string
 *              example:
 *                 stu_id: 1905024
 *                 room_no: 101
 *                 new_room_no: 102
 *                 reason: My roommates are noisy
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 */
