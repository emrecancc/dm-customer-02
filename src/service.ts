const config = require('./config');

function getApiUrl() {
  return config?.api?.baseUrl?.replace('http://', 'https://');
}

function processResponse(response) {
  const items = response.data?.items?.map(i => i.name) ?? [];
  return { items, count: items?.length };
}

module.exports = { getApiUrl, processResponse };
