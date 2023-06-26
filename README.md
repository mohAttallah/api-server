# api-server
# API Routes

## Deployment URL
[api-server](https://api-server-uqag.onrender.com)

## Cars

### Create a Car

- **Route:** POST /cars
- **Description:** Creates a new car.
- **Request Body:** JSON object containing car details ( brand,model,year).
```Json
{
   "brand": "Tyota",
   "model":"Prius" ,
   "year":2019

}
```
- **Response:** JSON object representing the created car.

### Get All Cars

- **Route:** GET /cars
- **Description:** Retrieves all cars.
- **Response:** JSON array containing car objects.

### Get a Specific Car

- **Route:** GET /cars/:id
- **Description:** Retrieves a specific car by its ID.
- **Response:** JSON object representing the car.

### Update a Specific Car

- **Route:** PUT /cars/:id
- **Description:** Updates a specific car by its ID.
- **Request Body:** JSON object containing updated car details ( brand,model, year).

```JSON
{
   "name": "School Name",
   "foundedYear":"2013" ,
    "studentCount":200

}
```

- **Response:** JSON object representing the updated car.

### Delete a Specific Car

- **Route:** DELETE /cars/:id
- **Description:** Deletes a specific car by its ID.
- **Response:** deleted.


## Schools

### Create a School

- **Route:** POST /schools
- **Description:** Creates a new school.
- **Request Body:** JSON object containing school details (name, foundedYear, studentCount).
- **Response:** JSON object representing the created school.

### Get All Schools

- **Route:** GET /schools
- **Description:** Retrieves all schools.
- **Response:** JSON array containing school objects.

### Get a Specific School

- **Route:** GET /schools/:id
- **Description:** Retrieves a specific school by its ID.
- **Response:** JSON object representing the school.

### Update a Specific School

- **Route:** PUT /schools/:id
- **Description:** Updates a specific school by its ID.
- **Request Body:** JSON object containing updated school details (name, foundedYear, studentCount).
- **Response:** JSON object representing the updated school.

### Delete a Specific School

- **Route:** DELETE /schools/:id
- **Description:** Deletes a specific school by its ID.
- **Response:** deleted.
