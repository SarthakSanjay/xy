import express from 'express'
import { postTweet,getAllTweets, likeTweet, deleteTweet } from '../controllers/tweet'
const router = express.Router()

router.route('/').post(postTweet)
router.route('/all').get(getAllTweets)
router.route('/:userId/:id').put(likeTweet)
router.route('/:id').delete(deleteTweet)
export default router