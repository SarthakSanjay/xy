import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { addCommentToTweet, getChildComments, getCommentsByTweetId, getCommentsByUserId, getSpecificComment } from '../controllers/comment'
const router = express.Router()

router.route('/:tweetId').post(authMiddleware,addCommentToTweet)
router.route('/getCommentByTweetId/:tweetId').get(getCommentsByTweetId)
router.route('/getChildComments/:commentId').get(getChildComments)
router.route('/getSpecificComment/:commentId').get(getSpecificComment)
router.route('/replies').get(authMiddleware,getCommentsByUserId)
export default router