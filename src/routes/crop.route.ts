import { Router } from 'express';
import * as cropController from '../controllers/crop.controller';

const router = Router();

/**
 * @swagger
 * /api/crops:
 *   get:
 *     summary: Retrieve a list of crops
 *     tags: [Crops]
 *     parameters:
 *       - in: query
 *         name: farmId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter crops by farmId
 *     responses:
 *       200:
 *         description: A list of crops.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Crop'
 *   post:
 *     summary: Create a new crop entry on a farm
 *     tags: [Crops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - farmId
 *               - name
 *               - plantingDate
 *             properties:
 *               farmId:
 *                 type: string
 *                 format: uuid
 *               name:
 *                 type: string
 *               variety:
 *                 type: string
 *               plantingDate:
 *                 type: string
 *                 format: date
 *               expectedHarvest:
 *                 type: string
 *                 format: date
 *               growthStage:
 *                 type: string
 *               healthStatus:
 *                 type: string
 *                 enum: [healthy, warning, critical]
 *               progress:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Crop entry created.
 */
router.get('/', cropController.getCrops);
router.post('/', cropController.createNewCrop);

/**
 * @swagger
 * /api/crops/{id}:
 *   get:
 *     summary: Get a crop by ID
 *     tags: [Crops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Crop details.
 *       404:
 *         description: Crop not found.
 *   put:
 *     summary: Update crop details
 *     tags: [Crops]
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
 *               variety:
 *                 type: string
 *               plantingDate:
 *                 type: string
 *                 format: date
 *               expectedHarvest:
 *                 type: string
 *                 format: date
 *               growthStage:
 *                 type: string
 *               healthStatus:
 *                 type: string
 *                 enum: [healthy, warning, critical]
 *               progress:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Crop updated.
 *   delete:
 *     summary: Delete a crop record
 *     tags: [Crops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Crop deleted.
 */
router.get('/:id', cropController.getCropById);
router.put('/:id', cropController.updateExistingCrop);
router.delete('/:id', cropController.removeCrop);

export default router;
