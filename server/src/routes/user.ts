import express from "express"
import { deleteUser, getAllUser, getSpecificUser, loginUser, registerUser, updateUser } from "../controllers/user"
const router = express.Router()


router.route("/",).post(registerUser)
router.route("/login",).post(loginUser)
router.route('/update/:id').put(updateUser)
router.route('/delete/:id').delete(deleteUser)
router.route('/all').get(getAllUser)
router.route('/user/:username').get(getSpecificUser)

export default router