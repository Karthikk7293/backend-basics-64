import { getUserWithId } from "../services/userServices.js"

export const handleValidateUserSignIn = async (req, res, next) => {
    const { name, email, password } = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "please enter name" })
    }
    if (!email) {
        return res.status(400).json({ success: false, message: "please enter email" })
    }
    if (!password) {
        return res.status(400).json({ success: false, message: "please enter password" })
    }
    next()

}

export const handleUserParams = async (req, res, next) => {
    const { userId } = req.params;
    console.log(userId);


    if (!userId) {
        return res.status(400).json({ success: false, message: "user id not found!" })
    }

    const isUserExist = await getUserWithId(userId)

    if (isUserExist) {
        next()
    } else {
        return res.status(400).json({ success: false, message: "user not found!" })
    }


}