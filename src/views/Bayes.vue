<template lang="pug">
.home
  b-card.border-light(title='Bayes Calculator')
  .row
    .col-sm
      b-input-group.mb-2(size='s', prepend='Prevalence', append='%')
        b-form-input(v-model='prevalence_percent', type='number')
      input#formControlRange.form-control-range(type='range', v-model='prevalence_percent')
    .col-sm
      b-input-group.mb-2(size='s', prepend='Sensitivity', append='%')
        b-form-input(v-model='sensitivity_percent', type='number')
      input#formControlRange.form-control-range(type='range', v-model='sensitivity_percent')
    .col-sm
      b-input-group.mb-2(size='s', prepend='Specificity', append='%')
        b-form-input(v-model='specificity_percent', type='number')
      input#formControlRange.form-control-range(type='range', v-model='specificity_percent')
  h2 Graphical
  .container
    .row.justify-content-md-center
      .col-sm-3
        h3 Population
        |           {{shuffle("🤢".repeat(roundup(prevalence*100))+"😃".repeat(100-roundup(prevalence*100)))}}
    .row.justify-content-md-center
      .col-sm-3
        h3 Test Positive
        |           {{shuffle("🤢".repeat(roundup((true_positive)*100))+"😃".repeat(roundup((false_positive)*100)))}}
      .col-sm-3
        h3 Test Negative
        |           {{shuffle("😃".repeat(roundup((true_negative)*100))+"🤢".repeat(roundup((false_negative)*100)))}}
    .row.justify-content-md-center
      .col-sm-3
        h4 True Positive
        |           {{"🤢".repeat(roundup(true_positive*100))}}
      .col-sm-3
        h4 False Positive
        |           {{"😃".repeat(roundup(false_positive*100))}}
      .col-sm-3
        h4 True Negative
        |           {{"😃".repeat(roundup(true_negative*100))}}
      .col-sm-3
        h4 False Negative
        |           {{"🤢".repeat(roundup(false_negative*100))}}
  h2 Confusion Matrix
  table.table
    tbody
      tr
        td
        td
        td True Condition
        td
        td
        td
      tr
        td
        td
          | Total Population
          .d-flex.justify-content-center.big
            | 100
            small 👱
        td
          | Condition Positive
          .d-flex.justify-content-center.big
            | {{roundup(prevalence*100)}}
            small 👱
        td
          | Condition Negative
          .d-flex.justify-content-center.big
            | {{roundup(100-(prevalence*100))}}
            small 👱
        td
          | Prevalence
          .d-flex.justify-content-center.big {{roundup(prevalence*100)}}
        td
          | Accuracy
          .d-flex.justify-content-center.big {{roundup(accuracy*100)}}
      tr
        td Predicted Condition
        td
          | Predicted Condition Positive
          .d-flex.justify-content-center.big
            | {{roundup((true_positive+false_positive)*100)}}
            small 👱
        td
          | True Positive
          .d-flex.justify-content-center.big
            | {{roundup(true_positive*100)}}
            small 👱
        td
          | False Positive
          .d-flex.justify-content-center.big
            | {{roundup(false_positive*100)}}
            small 👱
        td
          | Positive Predictive Value 
          br
          |Post-Test Probability
          .d-flex.justify-content-center.big {{roundup(positive_predictive_value*100)}}
        td False Discovery Rate
      tr
        td
        td
          | Predicted Condition Negative
          .d-flex.justify-content-center.big
            | {{roundup((true_negative+false_negative)*100)}}
            small 👱
        td
          | False Negative
          .d-flex.justify-content-center.big
            | {{roundup(false_negative*100)}}
            small 👱
        td
          | True Negative
          .d-flex.justify-content-center.big
            | {{roundup(true_negative*100)}}
            small 👱
        td False Omission Rate
        td
          | Negative Predictive Value
          br
          |Post-Test Probability
          .d-flex.justify-content-center.big {{roundup(negative_predictive_value*100)}}
      tr
        td
        td
        td
          | True Positive Rate (Sensitivity)
          .d-flex.justify-content-center.big {{roundup(sensitivity*100)}}
        td
          | False Positive Rate
          .d-flex.justify-content-center.big {{roundup(false_positive_rate*100)}}
        td
          | Positive Likelihood Ratio
          .d-flex.justify-content-center.big {{roundup(positive_likelihood_ratio)}}
        td Diagnostic odds ratio
      tr
        td
        td
        td
          | False Negative Rate
          .d-flex.justify-content-center.big {{roundup(false_negative_rate*100)}}
        td
          | True Negative Rate (Specificity)
          .d-flex.justify-content-center.big {{roundup(specificity*100)}}
        td
          | Negative Likelihood Ratio
          .d-flex.justify-content-center.big {{roundup(negative_likelihood_ratio)}}
        td
  h2 Text Summary
  |     In a group of 100 people, {{prevalence_percent}} will have the disease.
  br
  |     If we test all the people in the group, {{roundup((true_positive+false_positive)*100)}} people will have a positive test result and {{roundup((true_negative+false_negative)*100)}} people will have a negative test result.
  br
  |     Of the {{roundup((true_positive+false_positive)*100)}} people with a positive result, {{roundup(true_positive*100)}} will actually have the disease, and {{roundup(false_positive*100)}} will have a 'false' positive.
  br
  |     Of the {{roundup((true_negative+false_negative)*100)}} people with a negative result, {{roundup(true_negative*100)}} won't actually have the disease, and {{roundup(false_negative*100)}} will have a 'false' negative
  br
  h2 Likelihood Ratios

  .row
    .col-sm
      b-input-group.mb-2(size='s', prepend='Pre-Test', append='%')
        b-form-input(v-model='pre_test', type='number')
      input#formControlRange.form-control-range(type='range', v-model='pre_test')
    .col-sm
      b-input-group.mb-2(size='s', prepend='LR')
        b-form-input(v-model='LR', type='number')
      input#formControlRange.form-control-range(type='range', v-model='LR')
    .col-sm
      b-input-group.mb-2(size='s', prepend='Post-Test', append='%')
        b-form-input(v-model='post_test', type='number')
      input#formControlRange.form-control-range(type='range', v-model='post_test')

</template>

<style lang="scss">
.big {
  font-size: 150%;
}
</style>

<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';

export default {
  name: "Bayes-Calculator",

  data: function () {
    return {      prevalence_percent: 0,
      sensitivity_percent: 0,
      specificity_percent: 0,
      pre_test: 0,
      LR: 0,
      roundup: function (num) {
        return +(Math.round(num + "e+2") + "e-2");
      },
      shuffle: function (str) {
        return Array.from(str).sort(function () { return 0.5 - Math.random() }).join('')
      }
    }
  },
  computed: {
    prevalence: function () { return this.prevalence_percent / 100 },
    sensitivity: function () { return this.sensitivity_percent / 100 },
    specificity: function () { return this.specificity_percent / 100 },
    true_positive: function () { return this.prevalence * this.sensitivity },
    true_negative: function () { return (1 - this.prevalence) * this.specificity },
    false_positive: function () { return (1 - this.prevalence) - this.true_negative },
    false_negative: function () { return this.prevalence - this.true_positive },
    positive_predictive_value: function () { return this.true_positive / (this.true_positive + this.false_positive) },
    negative_predictive_value: function () { return this.true_negative / (this.true_negative + this.false_negative) },
    false_positive_rate: function () { return this.false_positive / (1 - this.prevalence) },
    false_negative_rate: function () { return this.false_negative / this.prevalence },
    positive_likelihood_ratio: function () { return this.sensitivity / this.false_positive_rate },
    negative_likelihood_ratio: function () { return this.false_negative_rate / this.specificity },
    accuracy: function () { return (this.true_positive + this.true_negative) / 100 },
    post_test: function () {
      var p = this.pre_test / 100
      var pre_test_odds = (p / (1 - p));
      var post_test_odds = pre_test_odds * this.LR
      var post_test_probability = (post_test_odds / (1 + post_test_odds))
      return this.roundup(post_test_probability * 100)
    }
  },
};
</script>