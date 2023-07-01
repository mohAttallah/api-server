'use strict';

require('dotenv').config();
const { app } = require('../src/server');
const supertest = require('supertest');
const mockServer = supertest(app);


const { db } = require('../src/models/index');


beforeAll(async () => {
  // Open the connection before the test case start testing
  await db.sync();
})



describe("Server test", () => {
  it('should return 404 for a bad route', async () => {
  const response = await mockServer.get('/bad-route');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not found');
  });
  it('should return 404 for a bad method', async () => {
  const response = await mockServer.put('/schools');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not found');
});
  });



// describe('Server test', () => {
//   let createdCarId;

//   it('can create a new car', async () => {
//     const res = await mockServer.post('/cars').send({
//       brand: 'Toyota',
//       model: 'Camry',
//       year: 2022,
//     });
//     expect(res.status).toBe(201);
//     const createdCar = res.body;
//     createdCarId = createdCar.id;
//   });

//   it('can get all cars', async () => {
//     const res = await mockServer.get('/cars');
//     expect(res.status).toBe(200);
//   });

//   it('can get a specific car', async () => {
//     const res = await mockServer.get(`/cars/${createdCarId}`);
//     expect(res.status).toBe(200);
//   });

// it('can update a specific car', async () => {
//   const res = await mockServer.put(`/cars/${createdCarId}`).send({
//     brand: 'Honda',
//     model: 'Accord',
//     year: 2023,
//   });
//   expect(res.status).toBe(202);
// });



//   it('can delete a specific car', async () => {
//     const res = await mockServer.delete(`/cars/${createdCarId}`);
//     expect(res.status).toBe(204);
//   });
// });

// Author test
describe('Author Routes', () => {
  it('should get all authors', async () => {
    const res = await mockServer.get('/author');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should get one author by ID', async () => {
    const res = await mockServer.get('/author/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should create a new author', async () => {
    const authorData = { name: 'John Doe', age: 30, bio: 'Some bio' };
    const res = await mockServer
      .post('/author')
      .send(authorData);
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
   
  });

  it('should update an existing author', async () => {
    const authorData = { name: 'Updated Name' };
    const res = await mockServer
      .put('/author/1')
      .send(authorData);
    expect(res.status).toBe(202);
    expect(res.body).toBeDefined();
   
  });

  it('should delete an author', async () => {
    const res = await mockServer.delete('/author/1');
    expect(res.status).toBe(204);
   
  });
});


// Book test

describe('Book Routes', () => {
  it('should get all books', async () => {
    const res = await mockServer.get('/book');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should get one book by ID', async () => {
    const res = await mockServer.get('/book/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should create a new book', async () => {
    const bookData = { title: 'Book Title', author: 'Author Name' };
    const res = await mockServer
      .post('/book')
      .send(bookData);
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
   
  });

  it('should update an existing book', async () => {
    const bookData = { title: 'Updated Title', author: 'Updated Author' };
    const res = await mockServer
      .put('/book/1')
      .send(bookData);
    expect(res.status).toBe(202);
    expect(res.body).toBeDefined();
   
  });

  it('should delete a book', async () => {
    const res = await mockServer.delete('/book/1');
    expect(res.status).toBe(204);
   
  });
});

// School test

describe('School Routes', () => {
  it('should get all schools', async () => {
    const res = await mockServer.get('/school');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should get one school by ID', async () => {
    const res = await mockServer.get('/school/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should create a new school', async () => {
    const schoolData = { name: 'School Name', location: 'School Location' };
    const res = await mockServer
      .post('/school')
      .send(schoolData);
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
   
  });

  it('should update an existing school', async () => {
    const schoolData = { name: 'Updated School Name', location: 'Updated School Location' };
    const res = await mockServer
      .put('/school/1')
      .send(schoolData);
    expect(res.status).toBe(202);
    expect(res.body).toBeDefined();
   
  });

  it('should delete a school', async () => {
    const res = await mockServer.delete('/school/1');
    expect(res.status).toBe(204);
   
  });
});

// student test

describe('Student Routes', () => {
  it('should get all students', async () => {
    const res = await mockServer.get('/student');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should get one student by ID', async () => {
    const res = await mockServer.get('/student/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
   
  });

  it('should create a new student', async () => {
    const studentData = { name: 'Student Name', age: 18, grade: '10th' };
    const res = await mockServer
      .post('/student')
      .send(studentData);
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
   
  });

  it('should update an existing student', async () => {
    const studentData = { name: 'Updated Student Name', age: 19, grade: '11th' };
    const res = await mockServer
      .put('/student/1')
      .send(studentData);
    expect(res.status).toBe(202);
    expect(res.body).toBeDefined();
   
  });

  it('should delete a student', async () => {
    const res = await mockServer.delete('/student/1');
    expect(res.status).toBe(204);
   
  });
});


afterAll(async () => {
  // Close the connection after the test case finsh testing
  await db.drop();
})