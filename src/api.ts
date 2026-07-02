import { fetchData } from './service';

async function load() {
  const data = await fetchData();
  return data;
}

export default load;