import { Router } from "express"
import { createUser, updateUserDetails, getAllUsers, getUserDetails, deleteUser, loginUser } from "../controllers/userController.js";
import { handleUserParams, handleValidateUserSignIn, } from "../middlewares/userMiddleware.js";
import { handleAuth, handleRoles } from "../middlewares/auth.js";

const router = Router()

router.route('/').get((req, res) => {
    console.log("this is a user api ");
    res.json({ message: "response from user api" })
})

router.route('/sign-in').post(handleValidateUserSignIn, createUser)
router.route('/login').post(loginUser)
router.route('/update-user').put(handleAuth, handleValidateUserSignIn, updateUserDetails)
router.route('/get-all-users').get(handleAuth, handleRoles(['admin']), getAllUsers)
router.route('/user-details/:userId').get(handleUserParams, getUserDetails)
router.route('/delete-user/:userId').delete(handleUserParams, deleteUser)


export default router