const { get_student_info,
    get_student_edit_info,
    update_student_edit_info,
    apply_for_room,
    cancel_room_application,
    get_vacant_rooms,
    apply_for_room_change,
    cancel_room_change_application } = require('../controllers/dashboard.controller');
    
const { upload } = require('../middlewares/multerjs');

module.exports = (router) => {
    router.get('/dashboard', get_student_info);
    router.post('/application/room', apply_for_room);
    router.delete('/application/room', cancel_room_application);
    router.get('/application/room_change', get_vacant_rooms);
    router.post('/application/room_change', apply_for_room_change);
    router.delete('/application/room_change', cancel_room_change_application);
    router.get('/dashboard/edit', get_student_edit_info);
    router.put('/dashboard/edit', upload.single('photo'), update_student_edit_info);
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
 *                  hall:
 *                    type: string
 *                  resident:
 *                    type: boolean
 *                  guardian_name:
 *                    type: string
 *                  guardian_phone:
 *                    type: string
 *                  room_no:
 *                    type: number
 *                  seat_no:
 *                    type: number
 *                  applied_for_room:
 *                    type: boolean
 *              example:
 *                  stu_id: 1905024
 *                  name: John Doe
 *                  email: johndoe31@gmail.com
 *                  dept: CSE
 *                  level_term: 3-1
 *                  phone: "01700000000"
 *                  cgpa: 3.5
 *                  photo: "picture.jpg"
 *                  hall: Shahid Smriti Hall
 *                  resident: true
 *                  guardian_name: Jane Doe
 *                  guardian_phone: "01700000001"
 *                  room_no: 101
 *                  seat_no: 4
 *                  applied_for_room: false
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
 *                photo: "image1.jpg"
 *                guardian_name: John Doe
 *                guardian_phone: "01700000000"
 *    put:
 *      summary: Update user info
 *      tags: [Dashboard]
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
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
 *                  format: binary
 *                guardian_name:
 *                  type: string
 *                guardian_phone:
 *                  type: string
 *              example:
 *                  old_password: password1
 *                  new_password: password2
 *                  email: johndoe31@gmail.com
 *                  phone: "01700000000"
 *                  photo: "image1.jpg"
 *                  guardian_name: Jane Doe
 *                  guardian_phone: "01700000001"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "400":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error: 
 *                    type: string
 *                  form_data:
 *                    type: object
 *                    properties:
 *                      email:
 *                        type: string
 *                      phone:
 *                        type: string
 *                      photo:
 *                        type: string
 *                      guardian_name:
 *                        type: string
 *                      guardian_phone:
 *                        type: string
 *                example:
 *                  error: Incorrect password
 *                  form_data:
 *                    email: abc@gmail.com
 *                    phone: "01700000000"
 *                    photo: "image1.jpg"
 *                    guardian_name: Jane Doe
 *                    guardian_phone: "01700000001"
 */

/**
 * @swagger
 * /application/room:
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
 *                - home_district
 *                - school
 *                - college
 *              properties:
 *                  home_district:
 *                      type: string
 *                  school:
 *                      type: string
 *                  college:
 *                      type: string
 *              example:
 *                  home_district: Dhaka
 *                  school: ABC School
 *                  college: ABC College
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *    delete:
 *      summary: Cancel room application
 *      tags: [Dashboard] 
 *      responses:
 *        "200":
 *           $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /application/room_change:
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
 *                - room_no
 *                - seat_no
 *                - new_room_no
 *                - new_seat_no
 *                - reason
 *              properties:
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
 *                 room_no: 101
 *                 seat_no: 1
 *                 new_room_no: 102
 *                 new_seat_no: 3
 *                 reason: My roommates are noisy
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *    delete:
 *      summary: Cancel room change application
 *      tags: [Dashboard] 
 *      responses:
 *        "200":
 *           $ref: '#/components/responses/Success'
 */
