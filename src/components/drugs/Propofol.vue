<template lang="pug">
.home
  |Propofol

</template>

<style lang="scss">
.col-sm {
  padding-bottom: 5px;
}
</style>


<script>
import { sync, get } from 'vuex-pathify';

export default {
  name: "Propofol",
  computed: {
    weight: get("patient/weight")
  },
};
</script>