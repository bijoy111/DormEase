const { create_student, login } = require('../controllers/auth.controller');

module.exports = (router) => {
    router.get('/login', (req, res) => {
        res.send('Login page');
    });

    router.post('/create_student', create_student);
    router.post('/login', login);
}

// add swagger documentation here

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
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
 *                - ID
 *                - password
 *              properties:
 *                ID:
 *                  type: number
 *                  format: number
 *                password:
 *                  type: string
 *                  format: password
 *              example:
 *                ID: 1905024
 *                password: password1
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *              example:
 *                message: Student logged in successfully
 *        "401":
 *          description: Invalid ID or password
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                message: Invalid ID or password
 */

