import { createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import BayesCalculator from '@/views/Bayes.vue'

const roundup = function (num) {
  return (Math.round(num + "e+2") + "e-2") * 100;
}

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Component', () => {
  const wrapper = mount(BayesCalculator, { localVue })
  expect(wrapper.isVueInstance()).toBeTruthy()

  wrapper.setData({
    prevalence_percent: 50,
    sensitivity_percent: 95,
    specificity_percent: 80
  })

  it('prevalence', () => {
    expect(wrapper.vm.prevalence).toBe(0.5)
  })

  it('true positive', () => {
    expect(roundup(wrapper.vm.true_positive)).toBe(48)
  })

  it('true negative', () => {
    expect(roundup(wrapper.vm.true_negative)).toBe(40)
  })

  it('false negative', () => {
    expect(roundup(wrapper.vm.false_negative)).toBe(3)
  })

  it('false positive', () => {
    expect(roundup(wrapper.vm.false_positive)).toBe(10)
  })

  it('positive predictive value', () => {
    expect(roundup(wrapper.vm.positive_predictive_value)).toBe(83)
  })

  it('negative predictive value', () => {
    expect(roundup(wrapper.vm.negative_predictive_value)).toBe(94)
  })


})