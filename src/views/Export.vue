<template lang="pug">
.export
  b-button(v-on:click='getState') Get State
  b-button(v-on:click='setState') Set State
  b-button(v-on:click='blankState') Reset State
  b-form-textarea(v-model='displayedJSON')
</template>

<script>

export default {
  name: "export",
  data() {
    return {
      displayedJSON: ""
    }
  },

  methods: {
    getState() {
      this.displayedJSON = JSON.stringify(this.$store.state);
      this.$toasted.show("Exported")
    },
    setState() {
      this.$store.commit("loadState", JSON.parse(this.displayedJSON));
      this.$toasted.show("Imported");

    },
    blankState() {
      this.$store.commit("loadState", JSON.parse("{}"));
    }
  }
};
</script>