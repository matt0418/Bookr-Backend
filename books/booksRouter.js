const router = require('express').Router()
const Books = require('./booksHelper')
const gate = require('../auth/middleware')
const db = require('../data/dbConfig')
const bcrypt = require('bcryptjs')

router.get('/', async (req, res) => {
    try {
        const books = await Books.findAll()
        return res.status(200).json(books)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.get('/:id', gate, async (req, res) => {
    const id = req.params.id
    try {
        const book = await Books.findById(id)
        if (book) {
            const comments = await db('comments').where({'book_id': book.id})
            book.comments = comments
            return res.status(200).json(book)
        } else {
            return res.status(404).json({ message: "No such book with this ID exists" })
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})


router.post('/', async (req, res) => {
    const { title, author, publisher, rating, description, image, price } = req.body
    if (!title || !author || !publisher || !description || !price) {
        return res.status(400).json({ message: "Please fill in all fields" })
    }
    try {
        const book = await Books.add(req.body)
        return res.status(201).json(book)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})


router.put('/:id', gate, async (req, res) => {
    const id = req.params.id
    try {
        const updatedBook = await db('books').update(req.body).where({ id })
        if (updatedBook > 0) {
            const response = await db('books').where({ id })
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "No such book exists with this ID" })
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.delete('/:id', gate, async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await Books.remove(id)
        if (deleted > 0) {
            return res.status(204).json({ message: "Book was deleted" })
        } else {
            return res.status(404).json({ message: "No such book with this ID exists" })
        }
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

module.exports = router