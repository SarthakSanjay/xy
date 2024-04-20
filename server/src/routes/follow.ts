import express from 'express'
import { followUser, getFollowerAndFollowings, getFollowerAndFollowingsCount } from '../controllers/follow';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.route("/").post(authMiddleware,followUser);
router.route('/followed/:id').get(getFollowerAndFollowings)
router.route('/followCount').get(authMiddleware,getFollowerAndFollowingsCount)

export default router