const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3159);

describe('Server', () => {
  it('GET / returns 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => server.close());