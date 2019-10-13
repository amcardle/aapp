<template lang="pug">
.home
  b-card(title='Investigations')
    a(href='https://www.nice.org.uk/guidance/ng45/chapter/Recommendations') Reference
    b-table(responsive='', :items='investigations_indicated.filter(investigation => investigation.indicated == true)')
    .container

</template>

<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';

export default {
  name: "Investigations",

  data: function () {
    return {}
  },
  computed: {
    investigations_indicated: get('patient/investigations_indicated'),
  },
};
</script>