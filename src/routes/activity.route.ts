import { Router } from 'express';
import * as activityController from '../controllers/activity.controller';

const router = Router();

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Retrieve a list of activities
 *     tags: [Activities]
 *     parameters:
 *       - in: query
 *         name: farmId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter activities by farmId
 *     responses:
 *       200:
 *         description: A list of activities.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *   post:
 *     summary: Create a new activity entry
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - farmId
 *               - type
 *               - date
 *             properties:
 *               farmId:
 *                 type: string
 *                 format: uuid
 *               type:
 *                 type: string
 *                 enum: [irrigation, fertilizing, harvesting, pest_control, monitoring]
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [completed, scheduled, in_progress]
 *               cost:
 *                 type: number
 *     responses:
 *       201:
 *         description: Activity entry created.
 */
router.get('/', activityController.getActivities);
router.post('/', activityController.createNewActivity);

/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Get an activity by ID
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Activity details.
 *       404:
 *         description: Activity not found.
 *   put:
 *     summary: Update activity details
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [irrigation, fertilizing, harvesting, pest_control, monitoring]
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [completed, scheduled, in_progress]
 *               cost:
 *                 type: number
 *     responses:
 *       200:
 *         description: Activity updated.
 *   delete:
 *     summary: Delete an activity record
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Activity deleted.
 */
router.get('/:id', activityController.getActivityById);
router.put('/:id', activityController.updateExistingActivity);
router.delete('/:id', activityController.removeActivity);

export default router;
