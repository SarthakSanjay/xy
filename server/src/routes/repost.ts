import express from "express";
import {isReposted, repostTweet, totalRepostByTweetId, userRepostedTweets} from "../controllers/repost";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:id").put(authMiddleware,repostTweet);
router.route('/total/:id').get(totalRepostByTweetId)
router.route('/tweets').get(authMiddleware,userRepostedTweets)
router.route('/isReposted/:tweetId').get(authMiddleware,isReposted)
export default router;
