<template lang="pug">
.home
  b-card.border-light(title='Quick Maths')
    .row
      .col-sm
        b-form-input(v-model='input')
      .col-sm-2
        big {{output}}
      #editor-output.col-sm-4(v-html='tex')
        big {{output}}
    br
    | % w/v = grams in 100 millilitres
    br
    | % w/w = grams in 100 grams
    br
    | % v/v = millilitres in 100 millilitres.
    br
    | 1:1000 = gram in 1000 millilitres
    br
    | required volume = required dose / concentration of drug

</template>

<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify'
import * as math from 'mathjs'
import debounce from 'lodash/debounce'

export default {
  name: 'Quick Maths',

  data: function () {
    return { input: '' }
  },
  computed: {
    output: function () {
      return math.format(math.eval(this.input), 4)
    },
    tex: function () {
      return (
        '\\(' +
                math.parse(this.input).toTex() +
                ' = ' +
                math.parse(this.output).toTex() +
                '\\)'
      )
    }
  },
  watch: {
    input: debounce(function (e) {
      this.$nextTick(function () {
        MathJax.Hub.Queue([
          'Typeset',
          MathJax.Hub,
          'editor-output'
        ])
      })
    }, 300)
  }
}
</script>
