import express from 'express'
import connectDB from './config/db.js'
import vivosRouter from './routers/vivosRouter.js'
import mortosRouter from './routers/mortosRouter.js'
import enterroRouter from './routers/enterroRouter.js'

connectDB()

const app = express()

app.use(express.json())

app.use('/vivos', vivosRouter)
app.use('/mortos', mortosRouter)
app.use('/enterro', enterroRouter)

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`))