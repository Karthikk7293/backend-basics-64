import express from 'express'
import cartRouter from './routes/cartRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()

app.use(express.json()) // to parse the data 

app.use('/api/cart', cartRouter)
app.use('/api/user', userRouter)


app.listen(3000, () => {
    console.log('server is running........');

})