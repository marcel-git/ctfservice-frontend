<template>
  <div class="home">
    <MarkdownRenderer path="home"/>
  </div>
</template>

<script>
import MarkdownRenderer from "@/components/MarkdownRenderer";
export default {
  name: 'Home',
  components: {
    MarkdownRenderer
  }
}
</script>
