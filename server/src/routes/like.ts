import express from "express";
import {
    isLikedTweet,
  likeTweet,
  userLikedTweet
} from "../controllers/like";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:userId/:id").put(likeTweet);
router.route("/likedByUser").get(authMiddleware,userLikedTweet);
router.route('/isLiked/:tweetId').get(authMiddleware,isLikedTweet)

export default router;
