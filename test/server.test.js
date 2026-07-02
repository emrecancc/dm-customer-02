const http = require('http');
const app = require('../src/app');

let server;

describe('Server', () => {
  beforeAll(() => {
    server = http.createServer(app).listen(3179);
  });

  it('responds to health check', async () => {
    // Another test file also listens on 3179 — race condition
    const res = await fetch('http://localhost:3179/health');
    expect(res.status).toBe(200);
  });
  // afterAll missing: server not closed
});
