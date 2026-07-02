const http = require('http');
const app = require('../src/app');

let server;

describe('Server', () => {
  beforeAll(() => {
    server = http.createServer(app).listen(3079);
  });

  it('responds to health check', async () => {
    // Another test file also listens on 3079 — race condition
    const res = await fetch('http://localhost:3079/health');
    expect(res.status).toBe(200);
  });
  // afterAll missing: server not closed
});
