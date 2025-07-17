import { Router } from "express"

const router = Router()

router.route('/').get((req, res) => {
    console.log("this is a user api ");

    res.json({ message: "response from user api" })

})


export default router