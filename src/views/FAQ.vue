<template>
    <div class="faq">
        <MarkdownRenderer path="faq"/>
    </div>
</template>

<script>
    import MarkdownRenderer from "../components/MarkdownRenderer"

    export default {
        name: "FAQ",
        components: {
            MarkdownRenderer
        }
    }
</script>

<style>

</style>