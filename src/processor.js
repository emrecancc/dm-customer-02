function processData(items) {
  return items.map(item => {
    return item.value * 2
  }
}
module.exports = { processData };
