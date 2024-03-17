import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { addCommentToTweet, getCommentsByTweetId } from '../controllers/comment'
const router = express.Router()

router.route('/:tweetId').post(authMiddleware,addCommentToTweet)
router.route('/getCommentByTweetId/:tweetId').get(getCommentsByTweetId)


export default router