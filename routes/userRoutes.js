import { Router } from "express"
import { createUser } from "../controllers/userController.js";
import { handleValidateUserSignIn } from "../middlewares/userMiddleware.js";

const router = Router()

router.route('/').get((req, res) => {
    console.log("this is a user api ");

    res.json({ message: "response from user api" })

})

router.route('/sign-in').post(handleValidateUserSignIn, createUser)


export default router