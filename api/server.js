const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('../auth/authRouter')
const userRouter = require('../users/userRoutes')
const bookRouter = require('../books/booksRouter')
const commentRouter = require('../comments/commentsRouter')



const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)
server.use('/api/books', bookRouter)
server.use('/api/comments', commentRouter)

server.get('/', async (req, res) => {
    res.status(200).json({ message: "server is running" })
})

module.exports = server