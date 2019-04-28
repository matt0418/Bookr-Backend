
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(tbl) {
        tbl.increments()

        tbl.string('title', 128)
            .notNullable()
        
        tbl.string('author', 128)
            .notNullable()

        tbl.string('publisher', 128)
            .notNullable()

        tbl.integer('rating')

        tbl.string('description', 256)

        tbl.string('image', 128)

        tbl.integer('price')

        tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
