import express from "express"
import { deleteUser, getAllUser, getSpecificUser, insertUser, updateUser } from "../controllers/user"
const router = express.Router()


router.route("/",).post(insertUser)
router.route('/update/:id').put(updateUser)
router.route('/delete/:id').delete(deleteUser)
router.route('/all').get(getAllUser)
router.route('/user/:username').get(getSpecificUser)

export default router