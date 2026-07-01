function transformItems(items) {
  return items
    .filter(x => x.active)
    .map(x => ({
      id: x.id
      name: x.name,
      value: x.value * 2,
    }));
}
module.exports = { transformItems };
