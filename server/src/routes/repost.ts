import express from "express";
import {repostTweet, totalRepostByTweetId, userRepostedTweets} from "../controllers/repost";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:id").put(authMiddleware,repostTweet);
router.route('/total/:id').get(totalRepostByTweetId)
router.route('/tweets').get(authMiddleware,userRepostedTweets)
export default router;
