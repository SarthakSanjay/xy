import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware';
import { getNotification } from '../controllers/notification';

const router = express.Router();

router.route("/").get(authMiddleware,getNotification);


export default router