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



describe('Server test', () => {
  let createdCarId;

  it('can create a new car', async () => {
    const res = await mockServer.post('/cars').send({
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
    });
    expect(res.status).toBe(201);
    const createdCar = res.body;
    createdCarId = createdCar.id;
  });

  it('can get all cars', async () => {
    const res = await mockServer.get('/cars');
    expect(res.status).toBe(200);
  });

  it('can get a specific car', async () => {
    const res = await mockServer.get(`/cars/${createdCarId}`);
    expect(res.status).toBe(200);
  });

it('can update a specific car', async () => {
  const res = await mockServer.put(`/cars/${createdCarId}`).send({
    brand: 'Honda',
    model: 'Accord',
    year: 2023,
  });
  expect(res.status).toBe(202);
});



  it('can delete a specific car', async () => {
    const res = await mockServer.delete(`/cars/${createdCarId}`);
    expect(res.status).toBe(204);
  });
});


//Schools test

describe('Server test', () => {
  let createdSchoolId;

  it('can create a new school', async () => {
    const res = await mockServer.post('/schools').send({
      name: 'Example School',
      foundedYear: 2022,
      studentCount: 1000
    });
    expect(res.status).toBe(201);
    const createdSchool = res.body;
    createdSchoolId = createdSchool.id;
  });

  it('can get all schools', async () => {
    const res = await mockServer.get('/schools');
    expect(res.status).toBe(200);
  });

  it('can get a specific school', async () => {
    const res = await mockServer.get(`/schools/${createdSchoolId}`);
    expect(res.status).toBe(200);
  });

  it('can update a specific school', async () => {
    const res = await mockServer.put(`/schools/${createdSchoolId}`).send({
      name: 'Updated School Name',
      foundedYear: "2023",
      studentCount:1500,
    });
    expect(res.status).toBe(202);
  });



  it('can delete a specific school', async () => {
    const res = await mockServer.delete(`/schools/${createdSchoolId}`);
    expect(res.status).toBe(204);
  });
});



afterAll(async () => {
  // Close the connection after the test case finsh testing
  await db.drop();
})