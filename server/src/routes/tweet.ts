import express from 'express'
import { postTweet,getAllTweets } from '../controllers/tweet'
const router = express.Router()

router.route('/').post(postTweet)
router.route('/all').get(getAllTweets)

export default router