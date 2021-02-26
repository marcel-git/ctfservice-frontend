<template>
  <div class="MarkdownRenderer">
    <div id="article" class="markdown-body">
    </div>

  </div>

</template>

<script>
import {getPage} from "../scripts/contentLoader"

export default {
    name: "MarkdownRenderer",
  props: {
      path: String
    },
    data() {
        return {
            source: String,
            show: true,
            html: false,
            breaks: true,
            linkify: false,
            emoji: true,
        }
    },
    created: async function () {
        const temp = await getPage("/"+this.path);
        this.source = temp;

      const showdown = require("showdown"), showdownHighlight = require("showdown-highlight");

      let converter = new showdown.Converter({
        extensions: [showdownHighlight()]
      });

      this.source.content = converter.makeHtml(this.source.content);
      document.getElementById("article").innerHTML = this.source.content;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .markdown-body{
      border-radius: 40px;
      background: #2f343d;
      margin: 5% 5% 5% 5%;
      padding: 1% 1% 1% 1%;
    }

    code {
      border-radius: 20px;
    }

    .MarkdownRenderer h1 {
        color: #e06c75;
    }
    .MarkdownRenderer ul {
        margin-left: 0;
    }
</style>
