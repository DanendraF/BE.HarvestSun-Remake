import { Router } from 'express';
import * as activityTypeController from '../controllers/activity-type.controller';

const router = Router();

/**
 * @swagger
 * /api/activity-types:
 *   get:
 *     summary: Retrieve a list of activity types (Master Data)
 *     tags: [Activity Types (Master)]
 *     responses:
 *       200:
 *         description: A list of activity types.
 *   post:
 *     summary: Create a new activity type
 *     tags: [Activity Types (Master)]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Activity type created.
 */
router.get('/', activityTypeController.getActivityTypes);
router.post('/', activityTypeController.createNewActivityType);

/**
 * @swagger
 * /api/activity-types/{id}:
 *   get:
 *     summary: Get an activity type by ID
 *     tags: [Activity Types (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Activity type details.
 *       404:
 *         description: Activity type not found.
 *   put:
 *     summary: Update an activity type
 *     tags: [Activity Types (Master)]
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
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       200:
 *         description: Activity type updated.
 *   delete:
 *     summary: Delete an activity type
 *     tags: [Activity Types (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Activity type deleted.
 */
router.get('/:id', activityTypeController.getActivityTypeById);
router.put('/:id', activityTypeController.updateExistingActivityType);
router.delete('/:id', activityTypeController.removeActivityType);

export default router;
