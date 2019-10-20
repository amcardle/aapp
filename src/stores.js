import { writable } from "svelte/store";

function createWeight() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        setKg: kg => set(kg),
        setLb: lb => set(lb / 2.20462)
    };
}
export const weight = createWeight();

function createHeight() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        setCm: cm => set(cm)
    };
}

export const height = createHeight();
