import jwt from "jsonwebtoken";
import { asyncHandler } from "../middlewares/asyncHandler.js"
import { createUserService, updateUserDetailsServce, getAllUsersService, getUserWithId, deleteUserService, createSampleUsers, filterUsers, getUserDetailsWithEmail } from "../services/userServices.js"
import bcrypt from "bcryptjs";

// login user
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await getUserDetailsWithEmail(email)
    if (!user) {
        return res.status(400).json({ success: false, message: "user not exist!" })
    }

    const isValidUser = await bcrypt.compare(password, user.password)

    console.log(isValidUser);

    if (!isValidUser) {
        return res.status(400).json({ success: false, message: "wrong password" })
    }
    console.log(user);

    const token = jwt.sign({ name: user.name, email: user.email, id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    res.status(200).json({ success: true, token })

})

// sign in user 
export const createUser = asyncHandler(async (req, res) => {

    const { name, email, password, role } = req.body


    const updatedPassword = await bcrypt.hash(password, 10)

    const response = await createUserService({ email, name, password: updatedPassword, role })

    if (response.success) {
        return res.status(201).json(response)
    } else {
        return new Error("failed to create new user!")
    }

})

export const updateUserDetails = asyncHandler(async (req, res) => {
    const data = req.body
    const userId = req.user.id

    const result = await updateUserDetailsServce(userId, data)

    if (result) {
        return res.status(200).json({ success: true, message: "user details updated successfully!" })
    } else {
        return res.status(200).json({ success: false, message: "failed to update" })

    }

})

export const getAllUsers = asyncHandler(async (req, res) => {

    console.log("user details", req.user);


    const allUsers = await filterUsers()

    res.status(200).json({ success: true, allUsers })
})

export const getUserDetails = asyncHandler(async (req, res) => {

    const userId = req.params.userId

    console.log(userId);

    const userDetails = await getUserWithId(userId)

    if (!userDetails) {
        return res.status(400).json({ success: false, message: "user not found!" })
    }
    res.status(200).json({ success: true, userDetails })

})

export const deleteUser = asyncHandler(async (req, res) => {

    const response = await deleteUserService(req.params.userId)

    if (response) {
        return res.status(200).json({ success: true, message: "user details deleted successfully!" })
    }
})