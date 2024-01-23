const { create_student, login } = require('../controllers/auth.controller');

module.exports = (router) => {
    router.post('/create_student', create_student);
    router.post('/login', login);
}

// add swagger documentation here

/**
 * @swagger
 * tags:
 *   name: Auth
 */

/**
 * @swagger
 * /login:
 *    post:
 *      summary: Login
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - id
 *                - password
 *              properties:
 *                id:
 *                  type: number
 *                  format: number
 *                password:
 *                  type: string
 *                  format: password
 *              example:
 *                id: 1905024
 *                password: password1
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "401":
 *          description: Invalid ID or password
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                message: Invalid ID or password
 */

/**
 * @swagger
 * /create_student:
 *    post:
 *      summary: Register a student [Admin privilege required]
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - stu_id
 *                - password
 *                - name
 *                - email
 *                - dept
 *                - level_term
 *                - phone
 *                - cgpa
 *                - photo
 *                - room_no
 *                - hall
 *                - resident 
 *                - guardian_name
 *                - guardian_phone 
 *              properties:
 *                stu_id:
 *                  type: number
 *                password:
 *                  type: string
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                dept:
 *                  type: string
 *                level_term:
 *                  type: string
 *                phone:
 *                  type: string
 *                cgpa:
 *                  type: number
 *                photo:
 *                  type: string
 *                room_no:
 *                  type: number
 *                hall:
 *                  type: string
 *                resident:
 *                  type: boolean
 *                guardian_name:
 *                  type: string
 *                guardian_phone:
 *                  type: string
 *              example:
 *                  stu_id: 1905024
 *                  password: password1
 *                  name: John Doe
 *                  email: johndoe31@gmail.com
 *                  dept: CSE
 *                  level_term: 3-1
 *                  phone: "01700000000"
 *                  cgpa: 3.5
 *                  photo: 
 *                  room_no: 101
 *                  hall: Shahid Smriti Hall
 *                  resident: true
 *                  guardian_name: Jane Doe
 *                  guardian_phone: "01700000001"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "402":
 *          $ref: '#/components/responses/DuplicateID'
 *        "405":
 *          description: Unsuccessful registration
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                message: Unsuccessful registration
 */

