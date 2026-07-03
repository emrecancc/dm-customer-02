import { getCustomer } from '../src/api';

describe('API latency', () => {
  it('responds within 500ms', async () => {
    const start = Date.now();
    await getCustomer();
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(500);
  });
});