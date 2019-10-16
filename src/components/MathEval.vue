<script>
import * as math from 'mathjs'

export default {
  name: 'MathEval',
  data: function () {
    return {
      math: math
    }
  },
  props: ['expression', 'sf'] // TODO implement sf significant figures prop

}
</script>

<template>
    <span class="MathEval" v-bind:title="expression">
        {{math.format(math.eval(expression), 4)}}
    </span>
</template>
