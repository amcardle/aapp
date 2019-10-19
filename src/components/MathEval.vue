<script>

import { eval as matheval, format as mathformat } from 'mathjs'

export default {
  name: 'MathEval',
  data: function () {
    return {
      mathformat: mathformat,
      matheval: matheval
    }
  },
  props: ['expression', 'sf'] // TODO implement sf significant figures prop

}
</script>

<template>
    <span class="MathEval" v-bind:title="expression">
        {{mathformat(matheval(expression), 4)}}
    </span>
</template>
