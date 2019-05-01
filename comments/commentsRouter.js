const router = require('express').Router()
const Comments = require('./commentsHelper')
const gate = require('../auth/middleware')
const db = require('../data/dbConfig')

router.get('/', gate, async (req, res) => {
    try {
        const comments = await Comments.findAll()
        return res.status(200).json(comments)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.post('/', gate, async (req, res) => {
    const { book_id, user_id, comment, rating } = req.body
    if (!book_id, !user_id, !comment, !rating) {
        return res.status(400).json({ message: "Please fill out all fields" })
    }
    try {
        const comment = await Comments.add(req.body)
        return res.status(201).json(comment)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router