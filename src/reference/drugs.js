import * as math from 'mathjs';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Drug {
    constructor({ name, category, description, dose, presentation }) {
        this._name = name;
        this._category = category;
        this._description = description;
        this._dose = dose;
        this._presentation = presentation;
    }

    dose(weight) {
        return this._dose;
    }

    presentation(weight) {
        return this._presentation;
    }

    colour() {
        switch (this._category) {
            case 'Induction Agent':
                return 'background-color:Yellow;';
            case 'Opiod':
                return 'background-color:#71C5E8;';
            case 'Non-depolarising neuromuscular blocking drugs':
                return 'background-color:#FF7276;';
            case 'Depolarising neuromuscular blocking drugs':
                return 'background-color:#FF7276;';
            case 'Local anaesthetics':
                return 'background-color:#B0A9A0;';
            case 'Anticholinergic agents':
                return 'background-color:#A4D65E;';
            case 'Vasopressors':
                return 'background-color:#D6BFDD;';
            default:
                return 'background-color:white;';
        }
    }
}

class Drug_Weight extends Drug {
    dose(weight) {
        if (Array.isArray(this._dose)) {
            //if there is a list of doses then calculate the dose range
            return `<small>${this._dose[0]} - ${
                this._dose[1]
            }</small> <br>
            ${math.format(
                math.eval(this._dose[0] + '*' + weight + 'kg'),
                3
            )} - ${math.format(
                math.eval(this._dose[1] + '*' + weight + 'kg'),
                3
            )}`;
        } else {
            //otherwise just calculate the dose
            return `<small>${this._dose}</small> <br>
            ${math.format(
                math.eval(this._dose + '*' + weight + 'kg'),
                3
            )}`;
        }
    }

    presentation(weight) {
        if (Array.isArray(this._dose)) {
            //if there is a list of doses then calculate the dose range
            return `<small>${this._presentation}</small> <br>
                ${math.format(
                    math.eval(
                        '(' +
                            this._dose[0] +
                            '*' +
                            weight +
                            'kg) / (' +
                            this._presentation +
                            ')'
                    ),
                    3
                )} - 
                ${math.format(
                    math.eval(
                        '(' +
                            this._dose[1] +
                            '*' +
                            weight +
                            'kg) / (' +
                            this._presentation +
                            ')'
                    ),
                    3
                )}  `;
        } else {
            //otherwise just calculate the dose
            return `<small>${this._presentation}</small> <br>
                ${math.format(
                    math.eval(
                        '(' +
                            this._dose +
                            '*' +
                            weight +
                            'kg) / (' +
                            this._presentation +
                            ')'
                    ),
                    3
                )}  `;
        }
    }
}

class Drug_Fluid extends Drug {
    dose(weight) {
        /*
        4 ml/kg/h for the first 10 kg
        2 ml/kg/h for the next 10 kg
        1 ml/kg/h for every kg over 20 kg
        */
        var volume = 0;
        if (weight <= 10) {
            volume = 4 * weight;
        } else if (weight <= 20) {
            volume = 4 * 10 + 2 * (weight - 10);
        } else {
            volume = 4 * 10 + 2 * 10 + 1 * (weight - 20);
        }

        return `<small>4 ml/kg/h for the first 10 kg, 2 ml/kg/h for the next 10 kg, 1 ml/kg/h for every kg over 20 kg</small> <br>
        ${math.format(math.eval(volume + ' ml/h'), 3)} <br>
        ${math.format((volume / weight) * 24, 3)} ml/kg/day`;
    }

    presentation(weight) {}
}

export default [
    new Drug_Fluid({
        name: 'Fluid',
        category: '',
        description: 'Crystalloid',
        dose: [],
        presentation: ''
    }),
    new Drug_Weight({
        name: 'Propofol',
        category: 'Induction Agent',
        description: 'Induction Agent - LBW/TBW',
        dose: ['2 mg/kg', '3 mg/kg'],
        presentation: '10 mg/ml'
    }),
    new Drug_Weight({
        name: 'Thiopental',
        category: 'Induction Agent',
        description: 'Induction Agent - LBW/TBW',
        dose: ['3 mg/kg', '5 mg/kg'],
        presentation: '25 mg/ml'
    }),
    new Drug_Weight({
        name: 'Fentanyl',
        category: 'Opiod',
        description: 'Opiod - LBW',
        dose: '1 ug/kg',
        presentation: '50 ug/ml'
    }),
    new Drug_Weight({
        name: 'Alfentanil',
        category: 'Opiod',
        description: 'Opiod - LBW',
        dose: '10 ug/kg',
        presentation: '500 ug/ml'
    }),
    new Drug_Weight({
        name: 'Morphine',
        category: 'Opiod',
        description: 'Opiod - LBW',
        dose: '0.1 mg/kg',
        presentation: '10 mg/ml'
    }),
    new Drug_Weight({
        name: 'Atracurium',
        category: 'Non-depolarising neuromuscular blocking drugs',
        description: 'Muscle Relaxant - LBW',
        dose: '0.5 mg/kg',
        presentation: '10 mg/ml'
    }),
    new Drug_Weight({
        name: 'Vecuronium',
        category: 'Non-depolarising neuromuscular blocking drugs',
        description: 'Muscle Relaxant',
        dose: '0.1 mg/kg',
        presentation: '2 mg/ml'
    }),
    new Drug_Weight({
        name: 'Rocuronium',
        category: 'Non-depolarising neuromuscular blocking drugs',
        description: 'Muscle Relaxant - LBW',
        dose: '0.6 mg/kg',
        presentation: '10 mg/ml'
    }),
    new Drug_Weight({
        name: 'Suxamethonium',
        category: 'Depolarising neuromuscular blocking drugs',
        description: 'Muscle Relaxant - TBW',
        dose: ['1 mg/kg', '1.5 mg/kg'],
        presentation: '50 mg/ml'
    }),
    new Drug({
        name: 'Neostigmine + Glycopyrronium',
        description: 'Reversal for muscle relaxants - TBW',
        dose: 'Neostigmine 2.5 mg + Glycopyrronium 500 mcg', //TODO correct this
        presentation: ' '
    }),
    new Drug_Weight({
        name: 'Bupivacaine',
        category: 'Local anaesthetics',
        description: 'Local Anaesthetic - LBW/IBW',
        dose: '2 mg/kg',
        presentation: '2.5 mg/ml'
    }),
    new Drug_Weight({
        name: 'Bupivacaine',
        category: 'Local anaesthetics',
        description: 'Local Anaesthetic - LBW/IBW',
        dose: '2 mg/kg',
        presentation: '5 mg/ml'
    }),
    new Drug_Weight({
        name: 'Lidocaine',
        category: 'Local anaesthetics',
        description: 'Local Anaesthetic - LBW/IBW',
        dose: '3 mg/kg',
        presentation: '10 mg/ml'
    }),
    new Drug_Weight({
        name: 'Lidocaine',
        category: 'Local anaesthetics',
        description: 'Local Anaesthetic - LBW/IBW',
        dose: '3 mg/kg',
        presentation: '20 mg/ml'
    }),
    new Drug_Weight({
        name: 'Lidocaine with Adrenaline',
        category: 'Local anaesthetics',
        description: 'Local Anaesthetic - LBW/IBW',
        dose: '6 mg/kg',
        presentation: '10 mg/ml'
    }),

    new Drug({
        name: 'Suxamethonium',
        category: 'Depolarising neuromuscular blocking drugs',
        description: 'Laryngospasm',
        dose: '25-50 mg',
        presentation: '50 mg/ml (fridge)'
    }),
    new Drug_Weight({
        name: 'Atropine',
        category: 'Anticholinergic agents',
        description: 'Bradycardia',
        dose: '20 ug/kg',
        presentation: '1 mg/ml'
    }),
    new Drug({
        name: 'Glycopyrronium',
        category: 'Anticholinergic agents',
        description: 'Bradycardia',
        dose: '200 ug',
        presentation: '200 ug/ml'
    }),
    new Drug({
        name: 'Ephedrine',
        category: 'Vasopressors',
        description: 'Hypotension',
        dose: '3 mg',
        presentation: '3 mg/ml'
    }),
    new Drug({
        name: 'Metaraminol',
        category: 'Vasopressors',
        description: 'Hypotension',
        dose: '0.5 mg',
        presentation: '0.5 mg/ml'
    }),
    new Drug({
        name: 'Adrenaline',
        category: 'Vasopressors',
        description: 'Anaphylaxis',
        dose: '50-100 ug',
        presentation: '0.5–1 ml of 1:10,000'
    }),
    new Drug_Weight({
        name: 'Intralipid',
        description: 'Local anaesthetic toxicity',
        dose: '1.5 ml/kg',
        presentation: '1 ml/ml'
    }),
    new Drug_Weight({
        name: 'Dantrolene',
        description: 'Malignant Hyperthermia',
        dose: '2.5 mg/kg',
        presentation: '0.3 mg/ml'
    })
];
