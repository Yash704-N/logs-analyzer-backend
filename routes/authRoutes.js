import { Router } from 'express';
import { register, login ,resetpassword } from '../controllers/authController.js';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetpassword);

export default router;
