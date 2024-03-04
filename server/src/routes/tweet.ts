import express from 'express'
import { postTweet,getAllTweets, likeTweet, deleteTweet, repostTweet, allrepostAndLikes, userLikedTweet, userBookmarkedTweet, bookmarkTweet, addComment, getTweetComment } from '../controllers/tweet'
import { authMiddleware } from '../middleware/authMiddleware'
const router = express.Router()

router.route('/:userId').post(postTweet)
router.route('/all').get(getAllTweets)
router.route('/:userId/:id').put(likeTweet)
router.route('/repost/:userId/:id').put(repostTweet)
router.route('/:id').delete(deleteTweet)
router.route('/liked/:userId').get(userLikedTweet)
router.route('/bookmark/:userId/:id').put(bookmarkTweet)
router.route('/bookmarked/:userId').get(userBookmarkedTweet)
router.route('/lr').get(allrepostAndLikes)
router.route('/comment/:tweetId').post(authMiddleware,addComment)
router.route('/comment/all/:tweetId').get(getTweetComment)
export default router