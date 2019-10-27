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

export const BMI = derived([sex, height, weight], ([$sex, $height, $weight]) => {
    return ($weight * 10000) / ($height * $height);
});

export const ideal_body_weight = derived([sex, height], ([$sex, $height]) => {
    return (22 * (($height / 100) * ($height / 100))).toFixed(0);
});

export const lean_body_weight = derived([sex, height, weight, BMI], ([$sex, $height, $weight, $BMI]) => {
    //Using formula in (Anesthesiology 2017; 126:1019-32)
    if ($sex == "m") {
        return (9.27 * 10 * 10 * 10 * $weight) / (6.68 * 10 * 10 * 10 + 216 * $BMI);
    } else {
        return (9.27 * 10 * 10 * 10 * $weight) / (8.78 * 10 * 10 * 10 + 244 * $BMI);
    }
});
