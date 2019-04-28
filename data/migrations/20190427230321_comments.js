
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(tbl) {
      
        tbl.increments()

        tbl.string('comment', 128)
            .notNullable()

        tbl.integer('rating')

        tbl.integer('book_id')
            .unsigned()
            .references('id')
            .inTable('books')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
};
