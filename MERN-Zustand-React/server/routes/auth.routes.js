import {Router} from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller.js'
import requireAuth from '../middlewares/requireAuth.js'

const router = Router()

router.post('/login', loginHandler)
router.get('/profile', requireAuth, profileHandler)

export default router