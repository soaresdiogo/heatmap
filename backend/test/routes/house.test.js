const request = require('supertest');

const app = require('../../src/app');

test('Should list all houses', () => request(app).get('/houses')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  }));

test('Should create house with sucess', () => {
  const zipCode = Math.floor((Math.random() * 100000000) + 1).toString();
  request(app).post('/houses')
    .send({
      zipCode,
      number: Math.floor((Math.random() * 1000) + 1),
      latitude: (Math.random() * 100).toFixed(6),
      longitude: (Math.random() * 100).toFixed(6),
      residentNumber: Math.floor((Math.random() * 10) + 1),
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.zipCode).toBe(zipCode);
    });
});

test('Should not create house without zipCode', async () => {
  const result = await request(app).post('/houses')
    .send({
      number: 138, latitude: 29.913258, longitude: -51.186192, residentNumber: 3,
    });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('ZipCode is required');
});

test('Should not create house without number', async () => {
  const result = await request(app).post('/houses')
    .send({
      zipCode: '92000000', latitude: 29.913258, longitude: -51.186192, residentNumber: 3,
    });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Number is required');
});

test('Should not create house without latitude', async () => {
  const result = await request(app).post('/houses')
    .send({
      zipCode: '92000000', number: 138, longitude: -51.186192, residentNumber: 3,
    });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Latitude is required');
});

test('Should not create house without longitude', async () => {
  const result = await request(app).post('/houses')
    .send({
      zipCode: '92000000', number: 138, latitude: 29.913258, residentNumber: 3,
    });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Longitude is required');
});

test('Should not create house without residents', async () => {
  const result = await request(app).post('/houses')
    .send({
      zipCode: '92000000', number: 138, latitude: 29.913258, longitude: -51.186192,
    });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Residents is required');
});
