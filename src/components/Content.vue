<template>
  <div class="news">
    <h3>Test</h3>
    <vue-markdown class="result-html full-height" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
    :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
    :emoji="emoji" :typographer="typographer"></vue-markdown>
  </div>
</template>

<script>
//TODO update Highlight.js from Version 9 to Version 10
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Content',
  components: {
    VueMarkdown
  },
  data() {
    return {
      source: "",
      show: true,
      html: false,
      breaks: true,
      linkify: false,
      emoji: true,
      typographer: true
    }
  },
  methods: {
    loadMarkdown: function () {
      //TODO load Markdown into source variable
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
