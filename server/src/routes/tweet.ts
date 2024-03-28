import express from "express";
import {
  postTweet,
  getAllTweets,
  deleteTweet,
  allrepostAndLikes,
  userBookmarkedTweet,
  bookmarkTweet,
  getTweetById,
} from "../controllers/tweet";

const router = express.Router();

//tweet
router.route("/:userId").post(postTweet);
router.route("/all").get(getAllTweets);
router.route("/:tweetId").get(getTweetById);
router.route("/:id").delete(deleteTweet);
router.route("/bookmark/:userId/:id").put(bookmarkTweet);
router.route("/bookmarked/:userId").get(userBookmarkedTweet);

router.route("/lr").get(allrepostAndLikes);

export default router;
