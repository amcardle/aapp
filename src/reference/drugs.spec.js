import drugs from '@/reference/drugs'


/* Array of arrays to test for drug dosing
1. Name of drug
2. Weight in KG
3. Array of strings expected to appear in the dose or presentation fields */
const test_criteria = [
    ["Propofol", 70, ["140 mg", "210 mg", "2 mg/kg", "3 mg/kg", "14 ml", "21 ml"]],
    ["Thiopental", 70, ["3 mg/kg", "5 mg/kg", "210 mg", "350 mg"]]
    //TODO: write remaining drug unit testing criteria
]

var get_dose = function (name, weight) {
    return drugs.find((i) => { return i._name == name }).dose(weight)
}


var get_presentation = function (name, weight) {
    return drugs.find((i) => { return i._name == name }).presentation(weight)
}


describe.each(test_criteria)("Drug % s % s % s", (d, w, c) => {

    c.forEach((str, i) => {
        test(str, () => {
            expect(get_dose(d, w) + get_presentation(d, w)).toEqual(expect.stringContaining(str))
        })
    })
})