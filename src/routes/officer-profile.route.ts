import { Router } from 'express';
import * as officerProfileController from '../controllers/officer-profile.controller';

const router = Router();

/**
 * @swagger
 * /api/officer-profiles:
 *   get:
 *     summary: Retrieve a list of officer profiles
 *     tags: [Officer Profiles]
 *     responses:
 *       200:
 *         description: A list of officer profiles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OfficerProfile'
 *   post:
 *     summary: Create a new officer profile
 *     tags: [Officer Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *               region:
 *                 type: string
 *               performanceScore:
 *                 type: number
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *     responses:
 *       201:
 *         description: Officer profile created.
 */
router.get('/', officerProfileController.getOfficerProfiles);
router.post('/', officerProfileController.createNewOfficerProfile);

/**
 * @swagger
 * /api/officer-profiles/{id}:
 *   get:
 *     summary: Get an officer profile by ID
 *     tags: [Officer Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Profile found.
 *       404:
 *         description: Profile not found.
 *   put:
 *     summary: Update an officer profile
 *     tags: [Officer Profiles]
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
 *               region:
 *                 type: string
 *               performanceScore:
 *                 type: number
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *     responses:
 *       200:
 *         description: Profile updated.
 *   delete:
 *     summary: Delete an officer profile
 *     tags: [Officer Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Profile deleted.
 */
router.get('/:id', officerProfileController.getOfficerProfileById);
router.put('/:id', officerProfileController.updateExistingOfficerProfile);
router.delete('/:id', officerProfileController.removeOfficerProfile);

export default router;
