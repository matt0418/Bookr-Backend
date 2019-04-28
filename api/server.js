const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('../auth/authRouter')



const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)

server.get('/', async (req, res) => {
    res.status(200).json({ message: "server is running" })
})

module.exports = server