const db = require('../data/dbConfig')

module.exports = {
    add,
    findAll,
    findBy,
    findById,
    remove
}

function findAll() {
    return db('books').select('id', 'title', 'author', 'publisher', 'description', 'rating', 'image', 'price')
}

function findBy(filteredparam) {
    return db('books').where(filteredparam)
}

async function add(book) {
    const [id] = await db('books').insert(book)
    return findById(id)
}

function findById(id) {
    return db('books').where({ id }).first()
}

function remove(id) {
    return db('books').where({ id }).del()
}