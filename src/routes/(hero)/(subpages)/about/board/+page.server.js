import { BOARD_URL } from "$lib/constants"
export async function load(){
    let items;
    const res = await fetch(BOARD_URL);
    if (!res.ok) {
        items = {};
    } else {
        items = await res.json();
    }
    return {items};
}