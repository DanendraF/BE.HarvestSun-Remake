import { Router } from 'express';
import * as farmerProfileController from '../controllers/farmer-profile.controller';

const router = Router();

/**
 * @swagger
 * /api/farmer-profiles:
 *   get:
 *     summary: Retrieve a list of farmer profiles
 *     tags: [Farmer Profiles]
 *     responses:
 *       200:
 *         description: A list of farmer profiles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FarmerProfile'
 *   post:
 *     summary: Create a new farmer profile
 *     tags: [Farmer Profiles]
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
 *               phone:
 *                 type: string
 *               location:
 *                 type: string
 *               performanceScore:
 *                 type: number
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *     responses:
 *       201:
 *         description: Farmer profile created.
 */
router.get('/', farmerProfileController.getFarmerProfiles);
router.post('/', farmerProfileController.createNewFarmerProfile);

/**
 * @swagger
 * /api/farmer-profiles/{id}:
 *   get:
 *     summary: Get a farmer profile by ID
 *     tags: [Farmer Profiles]
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
 *     summary: Update a farmer profile
 *     tags: [Farmer Profiles]
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
 *               phone:
 *                 type: string
 *               location:
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
 *     summary: Delete a farmer profile
 *     tags: [Farmer Profiles]
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
router.get('/:id', farmerProfileController.getFarmerProfileById);
router.put('/:id', farmerProfileController.updateExistingFarmerProfile);
router.delete('/:id', farmerProfileController.removeFarmerProfile);

export default router;
