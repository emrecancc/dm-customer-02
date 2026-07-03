const request = require('supertest');
const server = require('../src/server');

describe('Server', () => {
  beforeAll(() => {
    // Use an OS-assigned random port to avoid address conflicts
    server.listen(0);
  });

  afterAll(() => {
    // Ensure the server is closed after all tests to free the port
    server.close();
  });

  test('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
