import express from 'express'
import { Login, Registration } from '../controllers/AccountController.js'
import { AccountReset, AccountSeeder } from '../utils/AccountSeeder.js'

const router = express.Router()

router.post('/register', Registration)
router.post('/login', Login)

router.post('/seed', AccountSeeder)
router.post('/reset', AccountReset)

export default router