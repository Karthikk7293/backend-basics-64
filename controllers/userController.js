import { asyncHandler } from "../middlewares/asyncHandler.js"
import { createUserService } from "../services/userServices.js"

export const createUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body


    const text = `name:${name} email:${email} password:${password}`

    const response = await createUserService('user.txt', text)

    if (response.success) {
        return res.status(201).json({ success: true, message: "user created successfully!" })
    } else {
        return new Error("failed to create new user!")
    }

})