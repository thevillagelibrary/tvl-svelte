import { N as NEWARRIVALS_URL } from "../../../../chunks/index.js";
async function load() {
  let items;
  const res = await fetch(NEWARRIVALS_URL);
  if (!res.ok) {
    items = {};
  } else {
    items = await res.json();
  }
  return { items };
}
export {
  load
};
