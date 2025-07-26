import express from 'express'
import cartRouter from './routes/cartRoutes.js'
import userRouter from './routes/userRoutes.js'
import { configDotenv } from 'dotenv'
import connectDatabase from './config/database.js'
configDotenv()
connectDatabase()

const app = express()

app.use(express.json()) // to parse the data 

// routes 
app.use('/api/cart', cartRouter)
app.use('/api/user', userRouter)

// error middleware 
app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).json({ error: error.message })
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}........`);

})