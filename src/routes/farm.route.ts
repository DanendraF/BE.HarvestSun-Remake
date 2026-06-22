import { Router } from 'express';
import * as farmController from '../controllers/farm.controller';

const router = Router();

/**
 * @swagger
 * /api/farms:
 *   get:
 *     summary: Retrieve a list of farms
 *     tags: [Farms]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter farms by owner (userId)
 *     responses:
 *       200:
 *         description: A list of farms.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Farm'
 *   post:
 *     summary: Create a new farm
 *     tags: [Farms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - name
 *               - size
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *               size:
 *                 type: number
 *               cropType:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, harvesting]
 *               healthScore:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Farm created.
 */
router.get('/', farmController.getFarms);
router.post('/', farmController.createNewFarm);

/**
 * @swagger
 * /api/farms/{id}:
 *   get:
 *     summary: Get a farm by ID
 *     tags: [Farms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Farm details.
 *       404:
 *         description: Farm not found.
 *   put:
 *     summary: Update a farm
 *     tags: [Farms]
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
 *               location:
 *                 type: string
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *               size:
 *                 type: number
 *               cropType:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, harvesting]
 *               healthScore:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Farm updated.
 *   delete:
 *     summary: Delete a farm
 *     tags: [Farms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Farm deleted.
 */
router.get('/:id', farmController.getFarmById);
router.put('/:id', farmController.updateExistingFarm);
router.delete('/:id', farmController.removeFarm);

export default router;
