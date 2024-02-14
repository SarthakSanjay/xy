import express from 'express'
import { postTweet,getAllTweets, likeTweet } from '../controllers/tweet'
const router = express.Router()

router.route('/').post(postTweet)
router.route('/all').get(getAllTweets)
router.route('/:userId/:id').put(likeTweet)
export default router