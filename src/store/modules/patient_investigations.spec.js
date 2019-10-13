/* Goes through all the  guidelines in https://www.nice.org.uk/guidance/NG45 and checks that they are correctly determined by patient.js
Currenly only confirms that required tests are ordered, doesn't check that we don't order non-required tests*/

import patient from '@/store/modules/patient'

describe('Investigations.vue', () => {

  test('pregnancy tests for women', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'f',
      asa: 1,
      surgical_grade: 1,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Pregnancy Test" }).indicated).toBe(true)
  })

  test('HbA1c in diabetics', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 1,
      surgical_grade: 1,
      comorbidities: ['diabetes']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "HbA1c" }).indicated).toBe(true)
  })

  test('Echo in heart failure', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 1,
      surgical_grade: 1,
      comorbidities: ['heart failure']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Echocardiography" }).indicated).toBe(true)
  })

  test('renal function in ASA3-4, Grade1, AKI risk', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 1,
      comorbidities: ['aki risk']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('renal function in ASA3-4, Grade1, AKI risk', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 1,
      comorbidities: ['aki risk']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })


  test('ECG G1 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 1,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G1 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 1,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('FBC G2 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: ['cardiovascular disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })

  test('FBC G2 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: ['cardiovascular disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })

  test('FBC G2 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: ['renal disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })

  test('FBC G2 ASA3-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: ['renal disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })

  test('G2 ASA3-4 liver disease', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: ["liver disease"]
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Haemostasis" }).indicated).toBe(true)
  })

  test('G2 ASA3-4 liver disease', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: ["liver disease"]
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Haemostasis" }).indicated).toBe(true)
  })


  test('G2 ASA2 AKI renal function', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 2,
      comorbidities: ['aki risk']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('G2 ASA3-4 function', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('G2 ASA3-4 function', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })


  test('ECG G2 ASA2 diseases', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 2,
      comorbidities: ['cardiovascular disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G2 ASA2 diseases', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 2,
      comorbidities: ['renal disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G2 ASA2 diseases', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 2,
      comorbidities: ['diabetes']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G2 ASA3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G2 ASA3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })


  test('G2 ASA3-4 lung func', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 2,
      comorbidities: ['respiratory disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Lung function/arterial blood gas" }).indicated).toBe(true)
  })

  test('G2 ASA3-4 lung func', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 2,
      comorbidities: ['respiratory disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Lung function/arterial blood gas" }).indicated).toBe(true)
  })


  test('FBC in all G3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 1,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })

  test('FBC in all G3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })
  test('FBC in all G3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })
  test('FBC in all G3', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Full Blood Count" }).indicated).toBe(true)
  })


  test('G3 ASA3-4 liver disease', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 3,
      comorbidities: ["liver disease"]
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Haemostasis" }).indicated).toBe(true)
  })

  test('G3 ASA3-4 liver disease', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 3,
      comorbidities: ["liver disease"]
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Haemostasis" }).indicated).toBe(true)
  })


  test('G3 ASA1 aki risk', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 1,
      surgical_grade: 3,
      comorbidities: ['aki risk']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Kidney Function" }).indicated).toBe(true)
  })

  test('ECG G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 2,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })

  test('ECG G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })
  test('ECG G3 ASA2-4', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 3,
      comorbidities: []
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "ECG" }).indicated).toBe(true)
  })


  test('G3 ASA3-4 lung func', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 3,
      surgical_grade: 3,
      comorbidities: ['respiratory disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Lung function/arterial blood gas" }).indicated).toBe(true)
  })

  test('G3 ASA3-4 lung func', () => {
    const state = {
      id: "",
      name: "",
      dob: 0,
      height: 0,
      weight: 0,
      sex: 'm',
      asa: 4,
      surgical_grade: 3,
      comorbidities: ['respiratory disease']
    }
    expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "Lung function/arterial blood gas" }).indicated).toBe(true)
  })



  // test('template', () => {
  //   const state = {
  //     id: "",
  //     name: "",
  //     dob: 0,
  //     height: 0,
  //     weight: 0,
  //     sex: 'm',
  //     asa: 1,
  //     surgical_grade: 1,
  //     comorbidities: []
  //   }
  //   expect(patient.getters.investigations_indicated(state, patient.getters).find((i) => { return i.investigation == "_" }).indicated).toBe(true)
  // })
})

