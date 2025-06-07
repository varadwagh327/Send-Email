import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';


const app = express()
app.use(express.json())

const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
    })
})

app.use('/api/user', userRouter);

