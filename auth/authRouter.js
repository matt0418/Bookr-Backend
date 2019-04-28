const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../users/userHelpers')

const secrets = require('../secrets/secrets')

router.get('/', async (req, res) => {
    return res.status(200).json({ message: "auth router is up" })
})

module.exports = router