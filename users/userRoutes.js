const router = require('express').Router()
const Users = require('./userHelpers')
const gate = require('../auth/middleware')
const db = require('../data/dbConfig')
const bcrypt = require('bcryptjs')

router.get('/', gate, async (req, res) => {
    try {
        const users = await Users.findAll()
        return res.status(200).json(users)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.get('/:id', gate, async (req, res) => {
    const id = req.params.id
    try {
        const user = await Users.findById(id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(401).json({ message: "No user with this ID exists" })
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

module.exports = router