
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          comment: 'This is an excellent book',
          rating: 5,
          book_id: 1,
          user_id: 1
        },
        {
          comment: 'Great Book',
          rating: 4,
          book_id: 1,
          user_id: 2
        },
        {
          comment: 'Well worth the read',
          rating: 5,
          book_id: 2,
          user_id: 3
        },
        {
          comment: 'I really enjoyed it',
          rating: 4,
          book_id: 2,
          user_id: 4
        },
        {
          comment: 'Need to see what else they have written',
          rating: 3,
          book_id: 2,
          user_id: 5
        },
        {
          comment: 'Excellent',
          rating: 5,
          book_id: 3,
          user_id: 6
        },
        {
          comment: 'Love these type of books',
          rating: 4,
          book_id: 3,
          user_id: 7
        },
        {
          comment: 'what a great book',
          rating: 5,
          book_id: 3,
          user_id: 8
        },
        {
          comment: 'Need more of this',
          rating: 4,
          book_id: 1,
          user_id: 9
        },
      ]);
    });
};
