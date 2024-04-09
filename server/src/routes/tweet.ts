import express from "express";
import {
  postTweet,
  getAllTweets,
  deleteTweet,
  allrepostAndLikes,
  getTweetById,
  getTweetByUserId,
} from "../controllers/tweet";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:userId").post(postTweet);
router.route("/all").get(getAllTweets);
router.route("/:tweetId").get(getTweetById);
router.route("/user/tweets").get(authMiddleware,getTweetByUserId);
router.route("/:id").delete(deleteTweet);

router.route("/lr").get(allrepostAndLikes);

export default router;
