const db = require('../data/dbConfig')

module.exports = {
    add,
    findAll,
    findBy,
    findById,
    remove
}

function findAll() {
    return db('comments').select('id', 'book_id', 'user_id', 'comment', 'rating')
}

function findBy(filteredparam) {
    return db('comments').where(filteredparam)
}

async function add(comment) {
    const [id] = await db('comments').insert(comment)
    return findById(id)
}

function findById(id) {
    return db('comments').where({ id }).first()
}

function remove(id) {
    return db('comments').where({ id }).del()
}