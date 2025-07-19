import { createUserService } from "../services/userServices.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const text = `name:${name} email:${email} password:${password}`

        const response = await createUserService('user.txt', text)
        console.log(response);

        if (response.success) {

            res.status(201).json({ success: true, message: "user created successfully!" })
        } else {
            res.status(500).json({ success: false, message: "user sign in process not completed" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}