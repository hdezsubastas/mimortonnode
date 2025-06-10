import express from 'express'
import mortonRoutes from './routes/morton.routes.js'

const app = express()

app.use(mortonRoutes);

export default app

