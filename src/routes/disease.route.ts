import { Router } from 'express';
import * as diseaseController from '../controllers/disease.controller';

const router = Router();

/**
 * @swagger
 * /api/diseases:
 *   get:
 *     summary: Retrieve a list of diseases (Master Data)
 *     tags: [Diseases (Master)]
 *     responses:
 *       200:
 *         description: A list of diseases.
 *   post:
 *     summary: Create a new disease entry
 *     tags: [Diseases (Master)]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - severity
 *             properties:
 *               name:
 *                 type: string
 *               symptoms:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *     responses:
 *       201:
 *         description: Disease created.
 */
router.get('/', diseaseController.getDiseases);
router.post('/', diseaseController.createNewDisease);

/**
 * @swagger
 * /api/diseases/{id}:
 *   get:
 *     summary: Get a disease by ID
 *     tags: [Diseases (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Disease details.
 *       404:
 *         description: Disease not found.
 *   put:
 *     summary: Update a disease
 *     tags: [Diseases (Master)]
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
 *               symptoms:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *     responses:
 *       200:
 *         description: Disease updated.
 *   delete:
 *     summary: Delete a disease entry
 *     tags: [Diseases (Master)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Disease deleted.
 */
router.get('/:id', diseaseController.getDiseaseById);
router.put('/:id', diseaseController.updateExistingDisease);
router.delete('/:id', diseaseController.removeDisease);

export default router;
