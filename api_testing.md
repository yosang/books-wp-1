# GET /books

```sh
curl -X GET http://localhost:3000/books
```

# POST /books

```sh
curl -X POST http://localhost:3000/books --header 'Content-Type: application/json' --data '
{
  "title": "Harry Potter and the Prisoner of Azkaban",
  "author": "J.K. Rowling",
  "genre": "Fantasy",
  "publication_year": 1999,
  "metadata": {
    "rating": 4.8,
    "pages": 435,
    "isbn": "978-0439136365",
    "description": "Harry returns to Hogwarts amid danger from an escaped prisoner.",
    "tags": ["magic", "adventure", "youth"],
    "awards": [{"name": "Hugo Award", "year": 2000}]
  }
}'
```

# PUT /books/:id

```sh
curl -X PUT http://localhost:3000/books/1 --header 'Content-Type: application/json' --data ' {
  "title": "A new title"
}'
```

# DELETE books/:id
```sh
curl -X DELETE http://localhost:3000/books/1
```