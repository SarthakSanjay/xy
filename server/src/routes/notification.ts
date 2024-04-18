import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware';
import { getAllNotification, getNotification } from '../controllers/notification';

const router = express.Router();

router.route("/").get(authMiddleware,getNotification);
router.route("/all").get(authMiddleware,getAllNotification);


export default router