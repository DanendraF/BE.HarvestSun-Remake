import { Router } from 'express';
import * as cropTypeController from '../controllers/crop-type.controller';

const router = Router();

/**
 * @swagger
 * /api/crop-types:
 *   get:
 *     summary: Retrieve a list of crop types (Master Data)
 *     tags: [Crop Types (Master)]
 *     responses:
 *       200:
 *         description: A list of crop types.
 *   post:
 *     summary: Create a new crop type
 *     tags: [Crop Types (Master)]
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
 *               variety:
 *                 type: string
 *               season:
 *                 type: string
 *     responses:
 *       201:
 *         description: Crop type created.
 */
router.get('/', cropTypeController.getCropTypes);
router.post('/', cropTypeController.createNewCropType);

/**
 * @swagger
 * /api/crop-types/{id}:
 *   get:
 *     summary: Get a crop type by ID
 *     tags: [Crop Types (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Crop type details.
 *       404:
 *         description: Crop type not found.
 *   put:
 *     summary: Update a crop type
 *     tags: [Crop Types (Master)]
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
 *               season:
 *                 type: string
 *     responses:
 *       200:
 *         description: Crop type updated.
 *   delete:
 *     summary: Delete a crop type
 *     tags: [Crop Types (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Crop type deleted.
 */
router.get('/:id', cropTypeController.getCropTypeById);
router.put('/:id', cropTypeController.updateExistingCropType);
router.delete('/:id', cropTypeController.removeCropType);

export default router;
