# Bookr-BackEnd Repository for the Bookr React App

## Base URL

`https://bookr-matt.herokuapp.com`

## Project Initialization

Fork and clone the repo, and he run `yarn install` to install the required dependencies. After that run `yarn server`
to get the server running on localhost:5000

## Tech Stack

- NodeJs
- SQLite
- BcryptJS
- JSONWebToken
- Knex
- CORS
- ExpressJs

## Authorization Routes

POST to `/api/auth/register`

- expects name, username, password, email and role in the req.body

POST to /api/auth/login

- expects username and password in the req.body,
- outputs a token and welcome message

## Book Routes

GET to `/api/books`

- expects token for authorization
- outputs an array of books

GET to `/api/books/:id`

- expects token for authorization
- outputs a book object with the specified ID
- object includes keys (title, author, publisher, description, image, and price)

POST to `/api/books`

- expects token for authorization
- title, author, and publisher are required in the req.body
- adds the book to the database
- outputs the title and description of the experiences the user is signed up for

PUT to `/api/books/:id`

- expects token for authorization
- outputs book with updated information

DELETE to `/api/books/:id`

- expects token for authorization
- deleted the book at the specified ID 


## Comments Routes

GET to `/api/comments`

- expects token for authorization
- outputs an array of all of the comment available, with all their data

POST to `/api/comments`

- expects token for authorization
- book_id, user_id, comment, and rating are expected in the req.body
- adds the comment to the database


