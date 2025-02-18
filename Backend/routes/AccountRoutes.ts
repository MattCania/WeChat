import express from 'express'
import { Login, Registration } from '../controllers/AccountController.js'

const router = express.Router()

router.post('/register', Registration)
router.get('/login', Login)

export default router