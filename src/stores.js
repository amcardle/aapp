import { writable, derived } from "svelte/store";

function createWeight() {
    const { subscribe, set, update } = writable(70);

    return {
        subscribe,
        setKg: kg => set(kg),
        setLb: lb => set(lb / 2.20462)
    };
}
export const weight = createWeight();

function createHeight() {
    const { subscribe, set, update } = writable(180);

    return {
        subscribe,
        setCm: cm => set(cm)
    };
}

export const height = createHeight();

export const age = writable(40);

export const sex = writable("m");

export const ideal_body_weight = derived([sex, height], ([$sex, $height]) => {
    if ($sex === "m") {
        return (50 + 2.3 * ($height / 2.54 - 60)).toFixed(0);
    } else {
        return (45.5 + 2.3 * ($height / 2.54 - 60)).toFixed(0);
    }
});

export const adjusted_body_weight = derived(
    [ideal_body_weight, weight],
    ([$ideal_body_weight, $weight]) => {
        return (
            Number($ideal_body_weight) + 0.4 * ($weight - $ideal_body_weight)
        );
    }
);
