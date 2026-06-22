import { Router } from 'express';
import * as recommendationController from '../controllers/recommendation.controller';

const router = Router();

/**
 * @swagger
 * /api/recommendations:
 *   get:
 *     summary: Retrieve a list of recommendations
 *     tags: [Recommendations]
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
 *         description: A list of recommendations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recommendation'
 *   post:
 *     summary: Create a new recommendation entry
 *     tags: [Recommendations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - officerId
 *               - farmerId
 *               - message
 *             properties:
 *               officerId:
 *                 type: string
 *                 format: uuid
 *               farmerId:
 *                 type: string
 *                 format: uuid
 *               message:
 *                 type: string
 *               sent:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Recommendation created.
 */
router.get('/', recommendationController.getRecommendations);
router.post('/', recommendationController.createNewRecommendation);

/**
 * @swagger
 * /api/recommendations/{id}:
 *   get:
 *     summary: Get a recommendation by ID
 *     tags: [Recommendations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Recommendation details.
 *       404:
 *         description: Recommendation not found.
 *   put:
 *     summary: Update recommendation details
 *     tags: [Recommendations]
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
 *               message:
 *                 type: string
 *               sent:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Recommendation updated.
 *   delete:
 *     summary: Delete a recommendation record
 *     tags: [Recommendations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Recommendation deleted.
 */
router.get('/:id', recommendationController.getRecommendationById);
router.put('/:id', recommendationController.updateExistingRecommendation);
router.delete('/:id', recommendationController.removeRecommendation);

export default router;
