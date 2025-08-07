import { asyncHandler } from "../middlewares/asyncHandler.js"
import { createUserService, updateUserDetailsServce, getAllUsersService, getUserWithId, deleteUserService, createSampleUsers, filterUsers } from "../services/userServices.js"

export const createUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body


    const text = `name:${name} email:${email} password:${password}`

    const response = await createUserService('user.txt', req.body)

    if (response.success) {
        return res.status(201).json({ success: true, message: "user created successfully!" })
    } else {
        return new Error("failed to create new user!")
    }

})

export const updateUserDetails = asyncHandler(async (req, res) => {
    const data = req.body
    const userId = req.params.userId

    const result = await updateUserDetailsServce(userId, data)

    if (result) {
        return res.status(200).json({ success: true, message: "user details updated successfully!" })
    } else {
        return res.status(200).json({ success: false, message: "failed to update" })

    }

})

export const getAllUsers = asyncHandler(async (req, res) => {

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