import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import {protect} from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()
// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', protect, router)
app.use('/user', createNewUser)
app.use('/signing', signin)

export default app