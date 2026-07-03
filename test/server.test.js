const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3019);

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => server.close());