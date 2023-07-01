# api-server
# API Routes

## Deployment URL
[api-server](https://api-server-uqag.onrender.com)

## School
```
Model School has a relationship one to many with Model Student
```

### Create a School

- **Route:** POST /School
- **Description:** Creates a new School.
- **Request Body:** JSON object containing School details ( brand,model,year).
```Json
{
    "name":"Genius",
    "foundedYear":1970,
    "studentCount":300
}
```
- **Response:** JSON object representing the created School.

### Get All School

- **Route:** GET /cars
- **Description:** Retrieves all cars.
- **Response:** JSON array containing car objects.

### Get a Specific School

- **Route:** GET /school/:id
- **Description:** Retrieves a specific car by its ID.
- **Response:** JSON object representing the car.

### Update a Specific School

- **Route:** PUT /school/:id
- **Description:** Updates a specific school by its ID.
- **Request Body:** JSON object containing updated school details 



- **Response:** JSON object representing the updated car.

### Delete a Specific School

- **Route:** DELETE /cars/:id
- **Description:** Deletes a specific car by its ID.
- **Response:** deleted.


## Student

### Create a School

- **Route:** POST / student
- **Description:** Creates a new  record student.
- **Request Body:** JSON object containing studentdetails (name, age, schoolId (foreign key)).
```
{
    "name": "Ahmad",
    "age":22,
    "schoolId":1
}
```
- **Response:** JSON object representing the created school.

### Get All student

- **Route:** GET /student
- **Description:** Retrieves all student.
- **Response:** JSON array containing student objects.

### Get a Specific student

- **Route:** GET /student/:id
- **Description:** Retrieves a specific school by its ID.
- **Response:** JSON object representing the school.

### Update a Specific student
- **Route:** PUT /student/:id
- **Description:** Updates a specific student by its ID.
- **Request Body:** JSON object containing updated student details (name, foundedYear, studentCount).
- **Response:** JSON object representing the updated student.

###  Delete a Specific student

- **Route:** DELETE /student/:id
- **Description:** Deletes a specific student by its ID.
- **Response:** deleted.

## Author
```
 Author Model has a relationship one to many with  book Model
```


### Create an Author

- **Route:** `POST /author`
- **Description:** Creates a new record author.
- **Request Body:** JSON object containing author details (`name`, `age`, `bio`).
```json
{
  "name": "gorgie",
  "age": 53,
  "bio": "Good Writer"
}
```

Response: JSON object representing the created author.

### Get All Authors

- **Route:**  GET /author
- **Description:** Retrieves all authors.
- **Request Body:** JSON array containing author objects.

### Get a Specific Author

- **Route:**  GET /author/:id
- **Description:**  Retrieves a specific author by their ID.
- **Request Body:**  JSON object representing the author.

### Update a Specific Author
- **Route:**  PUT /author/:id
- **Description:** Updates a specific author by their ID.
- **Request Body:**  JSON object containing updated author details (name, age, bio).
Response: JSON object representing the updated author.

### Delete a Specific Author
- **Route:** DELETE /author/:id
- **Description:** Deletes a specific author by their ID.
Response: deleted.



## Book 

## Create a Book

- **Route:** `POST /book`
- **Description:** Creates a new record book.
- **Request Body:** JSON object containing book details (`title`, `publicationYear`, `genre`, `authorId` (foreign key)).

```json
{
    "title":"1984",
    "publicationYear":1949,
    "genre": "novel",
    "authorId":1
}
```

## Get All Books

- **Route:**  GET /book
- **Description:**  Retrieves all books.
- **Request Body:** JSON array containing book objects.


## Get a Specific Book
- **Route:**  GET /book/:id
- **Description:** Retrieves a specific book by its ID.
Response: JSON object representing the book.


## Update a Specific Book
- **Route:**  PUT /book/:id
- **Description:** Updates a specific book by its ID.
- **Request Body:** JSON object containing updated book details 
Response: JSON object representing the updated book.

## Delete a Specific Book
- **Route:** DELETE /book/:id
- **Description:** Deletes a specific book by its ID.
Response: deleted.
