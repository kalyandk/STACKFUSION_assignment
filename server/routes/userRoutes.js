import express from 'express'
import { createUser, getUsers, login } from '../controllers/users.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/register', createUser)
router.post('/login', login)

export default router