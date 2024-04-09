import express from 'express'
import { bookmarkTweet, userBookmarkedTweet } from "../controllers/bookmark";
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.route("/").get(authMiddleware,userBookmarkedTweet);
router.route("/:id").put(authMiddleware,bookmarkTweet);

export default router