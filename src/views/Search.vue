<template lang="pug">
.home
  b-card.border-light(title='Search')
    b-form-input(v-model='phrase' v-on:keyup.enter='search')
    b-button(v-on:click="search") Search
    br
    ul
        li(v-for="frame in iframes")
            h3
                a(:href="frame.url") {{frame.title}}
            //- iframe(:src='frame.url' width='100%' height="900")

</template>

<script>

export default {
  name: "export",
  data() {
    return {
      phrase: "",
      sphrase: ""
    }
  },

  methods: {
    search: function () {
      this.sphrase = this.phrase;
    }
  },
  computed: {
    iframes: function () {
      return [
        {          title: "NICE Guidelines",
          url: `https://www.nice.org.uk/search?q=${this.sphrase}`        },
        { title: "BNF", url: `https://bnf.nice.org.uk/#Search?q=${this.sphrase}` },
        { title: "Patient.info", url: `https://patient.info/search.asp?searchterm=${this.sphrase}&collections=Prof_Ref` },
        { title: "AAGBI", url: `https://www.google.com/search?q=${this.sphrase} site:aagbi.org` },
        { title: "RCoA", url: `https://www.google.com/search?q=${this.sphrase} site:rcoa.ac.uk` },
        { title: "GMC", url: `https://www.gmc-uk.org/search-results?searchText=${this.sphrase}` }
      ]
    }
  }
};
</script>