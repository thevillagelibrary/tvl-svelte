import { HOME_URL } from "$lib/constants"
export async function load({fetch}){
    let items;
    const res = await fetch(HOME_URL);
    if (!res.ok) {
        items = {};
    } else {
        items = await res.json();
    }
    return {items};
}