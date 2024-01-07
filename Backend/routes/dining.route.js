const { func } = require('../controllers/dining.controller');

module.exports = (router) => {
  router.get('/dining/:date', func);
  router.get('/dining/:date/entry/student', func);
  router.post('/dining/:date/entry/student', func);
  router.post('/dining/:date/entry/meal', func);
}

/**
 * @swagger
 * tags:
 *   name: Dining
 */

/**
 * @swagger
 * /dining/{date}:
 *    get:
 *      summary: Show dining menu of a date
 *      tags: [Dining]
 *      parameters:
 *        - in: path
 *          name: date
 *          schema:
 *              type: string
 *          required: true
 *          description: Date of the menu
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Meal'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /dining/{date}/entry/student:
 *    get:
 *      summary: Show presence status of all students of a date
 *      tags: [Dining]
 *      parameters:
 *        - in: path
 *          name: date
 *          schema:
 *              type: string
 *          required: true
 *          description: Date of the menu
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  date:
 *                    type: string
 *                  students:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        stu_id:
 *                          type: number
 *                        level_term:
 *                          type: string
 *                        lunch_present:
 *                          type: boolean
 *                        dinner_present:
 *                          type: boolean
 *                example:
 *                  date: "2021-01-01"
 *                  students:
 *                    - stu_id: 1905024
 *                      level_term: "4-1"
 *                      lunch_present: true
 *                      dinner_present: true
 *                    - stu_id: 2005025
 *                      level_term: "3-1"
 *                      lunch_present: true
 *                      dinner_present: false
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 * 
 *    post:
 *      summary: Submit a student's presence entry on the date [Staff privilege required]
 *      tags: [Dining]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - date
 *                - stu_id
 *                - meal_time
 *              properties:
 *                date:
 *                  type: string
 *                stu_id:
 *                  type: number
 *                meal_time:
 *                  type: string
 *              example:
 *                  date: "2021-01-01"
 *                  stu_id: 1905024
 *                  meal_time: "lunch"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /dining/{date}/entry/meal:
 *    post:
 *      summary: Submit menu item info of the date [Staff privilege required]
 *      tags: [Dining]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - date
 *                - name
 *                - quantity
 *                - price_per_item
 *                - meal_time
 *              properties:
 *                date:
 *                  type: string
 *                name:
 *                  type: string
 *                quantity:
 *                  type: number
 *                price_per_item:
 *                  type: number
 *                meal_time:
 *                  type: string
 *              example:
 *                date: "2021-01-01"
 *                name: "Chicken Biriyani"
 *                quantity: 200
 *                price_per_item: 60
 *                meal_time: "lunch"
 *      responses:
 *        "200":
 *          $ref: '#/components/responses/Success'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */