// Auto-fixed: null-safe destructuring for property 'street'
function safe(obj = {}) {
  const { street = null } = obj || {};
  return { street };
}
module.exports = { safe };
