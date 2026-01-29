const express = require('express');
const { getAllEmployees, searchEmployeesByName, addEmployee, addMannyEmployees, deleteEmployee } = require('../controllers/employeeController');

const router = express.Router();

/**
 * @swagger
 * /api/employee:
 *   get:
 *     summary: Get All Employess
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: Employees fetched successfully
 */
router.get('/', getAllEmployees);

/**
 * @swagger
 * /api/employee/search:
 *  get:
 *    summary: Get employees by names
 *    tags:
 *      - Employees
 *    parameters:
 *      - in: query
 *        name: name
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK          
 */

router.get('/search', searchEmployeesByName);  // use query, not param

/**
 * @swagger
 * /api/employee/addOne:
 *   post:
 *     summary: Add one Employee
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - names
 *               - email
 *               - age
 *               - salary
 *             properties:
 *               names:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               salary:
 *                 type: number
 *     responses:
 *       200:
 *         description: Employee added successfully
 */
router.post('/addOne', addEmployee);

/**
 * @swagger
 * /api/employee/manyEmployees:
 *   post:
 *     summary: Add Many employees
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   names:
 *                     type: string
 *                   email:
 *                     type: string
 *                   age:
 *                     type: number
 *                   salary:
 *                     type: number
 *       responses:
 *         200:
 *           descrption: Employees added successfully    
 */

router.post('/manyEmployees',addMannyEmployees);

/**
 * @swagger
 * /api/employee/delete/{names}:
 *   delete:
 *     summary: Delete one employee by names
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: names
 *         require: true
 *         schema:
 *           type: true
 *     responses:
 *       200:
 *         descrption: Employee deleted successfully
 */
router.delete('/delete/:names', deleteEmployee);

module.exports = router;
