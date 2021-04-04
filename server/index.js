import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

app.use('/users', userRoutes)

// app.get('/', (req, res) => {
//     res.send('')
// })

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

// DB connection and starting the server
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
