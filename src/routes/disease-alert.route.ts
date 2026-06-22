import { Router } from 'express';
import * as diseaseAlertController from '../controllers/disease-alert.controller';

const router = Router();

/**
 * @swagger
 * /api/disease-alerts:
 *   get:
 *     summary: Retrieve a list of disease alerts
 *     tags: [Disease Alerts]
 *     parameters:
 *       - in: query
 *         name: farmId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter disease alerts by farmId
 *     responses:
 *       200:
 *         description: A list of disease alerts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DiseaseAlert'
 *   post:
 *     summary: Create a new disease alert entry
 *     tags: [Disease Alerts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - farmId
 *               - diseaseName
 *               - severity
 *             properties:
 *               farmId:
 *                 type: string
 *                 format: uuid
 *               diseaseName:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *               detectedAt:
 *                 type: string
 *                 format: date-time
 *               imageUrl:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, resolved]
 *               recommendation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Disease alert created.
 */
router.get('/', diseaseAlertController.getDiseaseAlerts);
router.post('/', diseaseAlertController.createNewDiseaseAlert);

/**
 * @swagger
 * /api/disease-alerts/{id}:
 *   get:
 *     summary: Get a disease alert by ID
 *     tags: [Disease Alerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Disease alert details.
 *       404:
 *         description: Disease alert not found.
 *   put:
 *     summary: Update disease alert details
 *     tags: [Disease Alerts]
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
 *               diseaseName:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *               detectedAt:
 *                 type: string
 *                 format: date-time
 *               imageUrl:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, resolved]
 *               recommendation:
 *                 type: string
 *     responses:
 *       200:
 *         description: Disease alert updated.
 *   delete:
 *     summary: Delete a disease alert record
 *     tags: [Disease Alerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Disease alert deleted.
 */
router.get('/:id', diseaseAlertController.getDiseaseAlertById);
router.put('/:id', diseaseAlertController.updateExistingDiseaseAlert);
router.delete('/:id', diseaseAlertController.removeDiseaseAlert);

export default router;
