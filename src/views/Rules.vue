<template>
    <div class="rules">
        <MarkdownRenderer path="rules"/>
    </div>
</template>

<script>
    import MarkdownRenderer from "../components/MarkdownRenderer"

    export default {
        name: "Rules",
        components: {
            MarkdownRenderer
        }
    }
</script>

<style>

</style>