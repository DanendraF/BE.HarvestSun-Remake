import { Router } from 'express';
import * as assignmentController from '../controllers/officer-farmer-assignment.controller';

const router = Router();

/**
 * @swagger
 * /api/assignments:
 *   get:
 *     summary: Retrieve a list of officer-farmer assignments
 *     tags: [Assignments]
 *     parameters:
 *       - in: query
 *         name: officerId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by officerId
 *       - in: query
 *         name: farmerId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by farmerId
 *     responses:
 *       200:
 *         description: A list of assignments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OfficerFarmerAssignment'
 *   post:
 *     summary: Assign an officer to a farmer
 *     tags: [Assignments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - officerId
 *               - farmerId
 *             properties:
 *               officerId:
 *                 type: string
 *                 format: uuid
 *               farmerId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Assignment created.
 */
router.get('/', assignmentController.getAssignments);
router.post('/', assignmentController.createNewAssignment);

/**
 * @swagger
 * /api/assignments/{id}:
 *   get:
 *     summary: Get an assignment by ID
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Assignment details.
 *       404:
 *         description: Assignment not found.
 *   delete:
 *     summary: Delete an assignment
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Assignment deleted.
 */
router.get('/:id', assignmentController.getAssignmentById);
router.delete('/:id', assignmentController.removeAssignment);

export default router;
