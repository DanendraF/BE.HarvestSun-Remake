import { Router } from 'express';
import * as systemLogController from '../controllers/system-log.controller';

const router = Router();

/**
 * @swagger
 * /api/system-logs:
 *   get:
 *     summary: Retrieve a list of system logs
 *     tags: [System Logs]
 *     parameters:
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *         description: Filter logs by level (info, warning, error)
 *     responses:
 *       200:
 *         description: A list of system logs.
 *   post:
 *     summary: Create a new system log entry
 *     tags: [System Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - level
 *               - message
 *             properties:
 *               level:
 *                 type: string
 *                 enum: [info, warning, error]
 *               message:
 *                 type: string
 *               source:
 *                 type: string
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: System log entry created.
 */
router.get('/', systemLogController.getLogs);
router.post('/', systemLogController.createNewLog);

/**
 * @swagger
 * /api/system-logs/{id}:
 *   get:
 *     summary: Get a system log entry by ID
 *     tags: [System Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: System log details.
 *       404:
 *         description: System log not found.
 *   delete:
 *     summary: Delete a system log entry
 *     tags: [System Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: System log deleted.
 */
router.get('/:id', systemLogController.getLogById);
router.delete('/:id', systemLogController.removeLog);

export default router;
