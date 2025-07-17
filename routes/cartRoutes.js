import { Router } from "express";

const router = Router()

router.route('/').get((req, res) => {
    console.log("this is cart page");

    res.json({ response: "hi hello!" })

})
router.route('/someid').get((req, res) => {
    console.log("this is cart page with some id");

    res.json({ response: "hi hello! someid" })

})



export default router