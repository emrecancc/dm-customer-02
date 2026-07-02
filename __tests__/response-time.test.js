const request = require('supertest');
const app = require('../app');

describe('API response time', () => {
  test('API responds within 600ms', async () => {
    const start = Date.now();
    await request(app).get('/').expect(200);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(600);
  });
});