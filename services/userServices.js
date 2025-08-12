import User from '../models/user.js'


export const createUserService = async (data) => {

    const newUserDetails = new User(data)
    const result = await newUserDetails.save()
    console.log(result);

    return { success: true, result }

}

export const loginUserService = async (email, password) => {
    try {

    } catch (error) {
        console.log(error);

        return false
    }
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

export const getUserDetailsWithEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
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

export const createSampleUsers = async () => {
    try {
        const usersData = [];

        usersData.map(async (item) => {
            const newUserDetails = new User(
                {
                    name: item.fullName,
                    age: item.age,
                    email: item.email,
                    city: item.address.city,
                    gender: item.gender,
                }
            )
            await newUserDetails.save()
        })

    } catch (error) {
        console.log(error);

    }
}

export const filterUsers = async () => {
    try {

        const data = await User.aggregate([
            // {
            //     $match: { // this is for match the document 
            //         age: { $gte: 30, $lte: 35 } // based on age range 
            //     }
            // },
            {
                $project: {
                    name: 1,
                    age: 1,
                    email: 1,
                    city: 1,
                    _id: 0,
                }
            },
            {
                $sort: { age: -1 }
            },
            {
                $skip: 2
            },
            {
                $limit: 20
            }
        ])

        console.log(data);

        return data


    } catch (error) {
        console.log(error);

    }
}

