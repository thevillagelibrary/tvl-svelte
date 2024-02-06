import { DONATIONS_URL } from "$lib/constants"
export async function load(){
    let items;
    const res = await fetch(DONATIONS_URL);
    if (!res.ok) {
        items = {};
    } else {
        items = await res.json();
    }
    return {items};
}