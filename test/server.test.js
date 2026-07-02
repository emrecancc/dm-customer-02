const http = require('http');
const app = require('../src/app');

let server;

describe('Server', () => {
  beforeAll(() => {
    server = http.createServer(app).listen(3159);
  });

  it('responds to health check', async () => {
    // Another test file also listens on 3159 — race condition
    const res = await fetch('http://localhost:3159/health');
    expect(res.status).toBe(200);
  });
  // afterAll missing: server not closed
});
