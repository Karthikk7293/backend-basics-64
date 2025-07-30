import User from '../models/user.js'

export const createUserService = async (file, data) => {

    const newUserDetails = new User(data)
    const result = await newUserDetails.save()
    console.log(result);

    return { success: true }

}

export const getUserWithId = async (id) => {

    try {
        const user = await User.findById(id)
        if (user) {
            return user
        }
        return false

    } catch (error) {
        return false
    }

}

export const updateUserDetailsServce = async (userId, body) => {

    try {
        const user = await User.findByIdAndUpdate(userId, body)
        console.log(user);

        if (user) {
            return user
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

export const getAllUsersService = async () => {

    const allUsers = await User.find()

    return allUsers

}

export const deleteUserService = async (userId) => {
    try {
        await User.findByIdAndDelete(userId)

        return true

    } catch (error) {

        return new Error("failed to delete user ")
    }
}