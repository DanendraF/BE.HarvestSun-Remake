import { Router } from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import farmerProfileRoutes from './farmer-profile.route';
import officerProfileRoutes from './officer-profile.route';
import farmRoutes from './farm.route';
import cropRoutes from './crop.route';
import activityRoutes from './activity.route';
import diseaseAlertRoutes from './disease-alert.route';
import recommendationRoutes from './recommendation.route';
import assignmentRoutes from './officer-farmer-assignment.route';
import cropTypeRoutes from './crop-type.route';
import diseaseRoutes from './disease.route';
import activityTypeRoutes from './activity-type.route';
import systemLogRoutes from './system-log.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/farmer-profiles', farmerProfileRoutes);
router.use('/officer-profiles', officerProfileRoutes);
router.use('/farms', farmRoutes);
router.use('/crops', cropRoutes);
router.use('/activities', activityRoutes);
router.use('/disease-alerts', diseaseAlertRoutes);
router.use('/recommendations', recommendationRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/crop-types', cropTypeRoutes);
router.use('/diseases', diseaseRoutes);
router.use('/activity-types', activityTypeRoutes);
router.use('/system-logs', systemLogRoutes);

export default router;
