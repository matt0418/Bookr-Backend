
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          title: 'The Return of the King',
          author: 'J.R.R. Tolkien',
          publisher: 'Random House Publishing Group',
          rating: 5,
          description: 'The final work in J.R.R. Tolkiens masterpiece',
          image: 'https://i.stack.imgur.com/071TF.jpg',
          price: 999
        },
        {
          title: 'Harry Potter and the Prisoner of Azkaban',
          author: 'J.K. Rowling',
          publisher: 'Scholastic',
          rating: 4,
          description: 'The third installment in the Harry Potter Series',
          image: 'https://harrypotterfanzone.com/wp-content/2009/06/poa-us-jacket-art.jpg',
          price: 1499
        },
        {
          title: 'The Adventures of Huckleberry Finn',
          author: 'Mark Twain',
          publisher: 'Chatto & Windus',
          rating: 4,
          description: 'The classic novel from Mark Twain',
          image: 'https://the-artifice.com/wp-content/uploads/2015/09/ADVENTURES_OF_HUCKLEBERRY_FINN-2.jpg',
          price: 795
        },
      ]);
    });
};
