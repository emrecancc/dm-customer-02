export function processUser(data) {
  const { name, email, ...rest } = data ?? {};
  const { address: { street, city } } = rest
  return { name, email, street, city };
}
