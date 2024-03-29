import express from "express";
import {repostTweet, totalRepostByTweetId} from "../controllers/repost";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:id").put(authMiddleware,repostTweet);
router.route('/total/:id').get(totalRepostByTweetId)
export default router;
