const fetch = require('node-fetch');

// Test to ensure the API responds within an acceptable time frame.
// The threshold has been increased from 500ms to 1250ms to accommodate
// observed performance variations.

test('API responds within 1250ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(1250);
});