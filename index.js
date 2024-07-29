import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import heroRoutes from './routes/heroRoutes.js'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'


dotenv.config();


const app = express()

app.use(cors());
app.use(express.json());

app.use('/auth',authRoutes)
app.use('/heroes', heroRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})