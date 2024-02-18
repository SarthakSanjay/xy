import express from 'express'
import { postTweet,getAllTweets, likeTweet, deleteTweet, repostTweet, allrepostAndLikes, userLikedTweet, userBookmarkedTweet, bookmarkTweet } from '../controllers/tweet'
const router = express.Router()

router.route('/').post(postTweet)
router.route('/all').get(getAllTweets)
router.route('/:userId/:id').put(likeTweet)
router.route('/repost/:userId/:id').put(repostTweet)
router.route('/:id').delete(deleteTweet)
router.route('/liked/:userId').get(userLikedTweet)
router.route('/bookmark/:userId/:id').put(bookmarkTweet)
router.route('/bookmarked/:userId').get(userBookmarkedTweet)
router.route('/lr').get(allrepostAndLikes)
export default router