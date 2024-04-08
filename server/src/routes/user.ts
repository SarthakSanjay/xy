import express from "express"
import { deleteUser, displayUsername, getAllUser, getSpecificUser, getUserProfile, loginUser, registerUser, updateUser } from "../controllers/user"
import { authMiddleware } from "../middleware/authMiddleware"
const router = express.Router()


router.route("/register",).post(registerUser)
router.route("/login",).post(loginUser)
router.route('/update').put(authMiddleware,updateUser)
router.route('/delete').delete(authMiddleware,deleteUser)
router.route('/all').get(authMiddleware,getAllUser)
router.route('/user/:username').get(getSpecificUser)
router.route('/username').get(authMiddleware,displayUsername)
router.route('/profile').get(authMiddleware,getUserProfile)
export default router