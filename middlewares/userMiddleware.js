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