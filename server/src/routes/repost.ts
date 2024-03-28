import express from "express";
import {repostTweet} from "../controllers/repost";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

//tweet
router.route("/:id").put(authMiddleware,repostTweet);

export default router;
