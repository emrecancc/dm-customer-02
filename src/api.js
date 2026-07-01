async function getUser(id {
  const r = await fetch(`/api/users/${id}`);
  return r.json();
}
module.exports = { getUser };
