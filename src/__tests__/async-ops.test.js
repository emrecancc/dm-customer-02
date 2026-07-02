const batchProcess = require('../batchProcess');

describe('batch processing', () => {
  test('processes all items', async () => {
    const items = Array.from({ length: 10 }, (_, i) => i);
    const results = [];
    await Promise.all(
      items.map(item =>
        batchProcess(item, res => {
          results.push(res);
        })
      )
    );
    expect(results).toHaveLength(10);
  });
});